

export interface GridProps {
    cards:Data[];
    setCards: React.Dispatch<React.SetStateAction<Data[]>>;
    id:ReturnType<typeof setInterval> | undefined;
    timer:number
  }

 export interface Data {
    id:number;
    src:string;
    matched:boolean;
 }