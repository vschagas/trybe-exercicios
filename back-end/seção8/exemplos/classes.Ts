export default class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor (b: string, s:number, r:string, conn: string[]) {
    this.brand = b,
    this.size = s,
    this.resolution = r,
    this.connections = conn
  }

  turnOn ():void {
    console.log(this.brand, this.size, this, this.resolution, this.connections);
  }

}

const minhaTv = new Tv('samsung', 55, 'FullHd', ['HDMI'])
const minhaTv2 = new Tv('SEMP', 15, 'HD', ['HDMI'])

minhaTv.turnOn();
minhaTv2.turnOn();