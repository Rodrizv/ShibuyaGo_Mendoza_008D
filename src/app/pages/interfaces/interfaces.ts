
export interface IVehiculos{
    id:Number;
    marca:String;
    modelo:String;
    tipoVehiculo:String;
}

export interface IVehiculo{
    marca:String;
    modelo: String;
    tipoVehiculo:String;
}

export interface Users{
    id:number;
    username: string;
    password: string;
    role: string;
    isactive: boolean;
}

export interface IUsers{
    username: string;
    password: string;
    role: string;
    isactive: boolean;
}