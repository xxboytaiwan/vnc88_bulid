export class Struc {
}
export class Response_IndexData {
  marquee = new Array<Response_IndexData_Marquee>();
  lastest = new Array<Response_IndexData_Lastest>();
  live = new Array<Response_IndexData_Live>();
  international = new Array<Response_IndexData_International>();
  baseball = new Array<Response_IndexData_Baseball>();
}

export class Response_IndexData_Baseball {
  homeTeam = new Response_IndexData_Baseball_TeamInfo();
  awayTeam = new Response_IndexData_Baseball_TeamInfo();
  date = '';
  href = '';
}
export class Response_IndexData_Baseball_TeamInfo {
  name = '';
  logo = '';
  odds_national = '';
  odds_tw = '';
  odds_vs = '';
  score = '';
}

export class Response_IndexData_Marquee {
  a = '';
  img = {
    alt: '',
    src: ''
  };
}


export class Response_IndexData_Marquee_Img {

}

export class Response_IndexData_Lastest {
  background = {
    img: '',
    href: ''
  };
  catLink = {
    href: '',
    title: ''
  };
  titleHeading = {
    href: '',
    title: ''
  };
  authorLink = {
    icon: [],
    time: '',
    title: '',
    href: ''
  };
}

export class Response_IndexData_Live {
  background = '';
  title = '';
  href = '';
  newsTypes = new Array<Response_IndexData_Live_NewsTypes>();
  authorLink = {
    iClass: [],
    time: '',
    href: '',
    title: ''
  }
}

export class Response_IndexData_Live_NewsTypes {
  aClass = [];
  href = '';
  title = '';
}

export class Response_IndexData_International {
  img = '';
  tags = new Array<Response_IndexData_International_Tags>();
  title = '';
  href = '';
}

export class Response_IndexData_International_Tags {
  aClass = [];
  href = '';
  title = '';
}
