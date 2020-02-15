export class Order {
    private _origin: String = ''
    private _distance: number = null
    private _price: number = null
    private _date: Date = null
    private _destination: String = ''
    private _typeTransport: string = ''


    constructor() { }

    public get price(): number {
        return this._price
    }
    public set price(value: number) {
        this._price = value
    }
    public get destination(): String {
        return this._destination
    }
    public set destination(value: String) {
        this._destination = value
    }

    public get date(): Date {
        return this._date
    }
    public set date(value: Date) {
        this._date = value
    }

    public get distance(): number {
        return this._distance
    }
    public set distance(value: number) {
        this._distance = value
    }

    public get origin(): String {
        return this._origin
    }
    public set origin(value: String) {
        this._origin = value
    }

    public get typeTransport(): string {
        return this._typeTransport
    }
    public set typeTransport(value: string) {
        this._typeTransport = value
    }

}