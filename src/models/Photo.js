export class Photo {
  constructor(data) {
    this.body = data.explanation ||  this.body
    this.date = this.date
    this.img = data.hdurl  || this.img
    this.title = data.title
    this.copyright = data.copyright
  }
}