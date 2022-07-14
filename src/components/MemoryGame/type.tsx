

export interface GridProps {
    cards:Data[];
    setCards: React.Dispatch<React.SetStateAction<Data[]>>;
    id:ReturnType<typeof setInterval> | undefined;
    timer:number;
  }

export interface CardsProps {
   card:Data;
   flipped:any
   handleClick:(card:Data)=> void
}

 export interface Data {
    id:number;
    src:string;
    matched:boolean;
 }