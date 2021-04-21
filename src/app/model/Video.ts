export class Video {
  constructor(
    public videoId: number ,
    public data: Blob ,
    public fileName: string,
    public fileType: string,
    public videoTitle: string) {}
}
