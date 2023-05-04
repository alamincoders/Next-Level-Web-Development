type a = string;
type b = number;

type c = a extends string ? (b extends string ? string : number) : undefined;
