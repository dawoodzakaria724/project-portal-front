import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-documents',
  templateUrl: './main-documents.component.html',
  styleUrls: ['./main-documents.component.css'],
})
export class MainDocumentsComponent implements OnInit {
  faTrash = faTrash;
  name = '';
  selectedFile: File = null!;
  images: any = null;
  originalImage: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.refreshData();
  }

  async refreshData() {
    await this.http
      .get('http://localhost:3000/user/get')
      .toPromise()
      .then((res) => {
        this.images = res;
      });
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  async onUpload() {
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    this.name = this.selectedFile.name;
    reader.onload = async () => {
      console.log(reader.result);
      await this.http
        .post('http://localhost:3000/user/upload', {
          encoded_file: reader.result,
          encoded_file_name: this.selectedFile.name,
        })
        .toPromise();

      await this.refreshData();
    };
  }

  async onDelete(name: string) {
    const result = await this.http.post('http://localhost:3000/user/delete', { key: name }).toPromise();
    console.log(result);
    for (let index in this.images) {
      if (this.images[index].name == name) {
        this.images.splice(index, 1);
      }
    }
  }

  async openPic(name: string) {
    const result = this.http
      .post('http://localhost:3000/user/getOriginal', { key: name })
      .toPromise()
      .then((data) => {
        this.originalImage = data;
        window.open(this.originalImage.signedRequest);
      });
  }
}
