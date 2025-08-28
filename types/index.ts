export declare type TeamsStatsProps = {
  id: number;
  conference: string;
  division: string;
  title: string;
  win: number;
  offense: number;
  defence: number;
  pt: number;
  ast: number;
  reb: number;
  icon: string;
  iconSrc: string;
  Img: string;
  pts: number;
  matches: {
    played: number;
    win: number;
    lose: number;
  };
  total: {
    points: number;
    medium: {
      scored: number;
      conceded: number;
      diff: number;
      pct: number;
    };
  };
  internal: {
    points: number;
    record: {
      win: number;
      lose: number;
    };
    medium: {
      pct: number;
    };
  };
  external: {
    points: number;
    record: {
      win: number;
      lose: number;
    };
    medium: {
      pct: number;
    };
  };
};
