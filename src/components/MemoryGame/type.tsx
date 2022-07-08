

export interface GridProps {
    cards:Data[];
    setCards: React.Dispatch<React.SetStateAction<Data[]>>;
  }

 export interface Data {
    id:number;
    src:string;
    matched:boolean;
 }