export class ConferenceTalk {
  constructor(conferenceTitle: string, conferenceCity: string, conferenceUrl: string,
              talkTitle: string, talkUrl: string, videoUrl: string, talkDate: Date) {
    this.conferenceTitle = conferenceTitle;
    this.conferenceCity = conferenceCity;
    this.conferenceUrl = conferenceUrl;
    this.talkTitle = talkTitle;
    this.talkUrl = talkUrl;
    this.videoUrl = videoUrl;
    this.talkDate = new Date(talkDate);
  }

  conferenceTitle: string;
  conferenceCity: string;
  conferenceUrl: string;
  talkTitle: string;
  talkUrl: string;
  videoUrl: string;
  talkDate: Date;
}
