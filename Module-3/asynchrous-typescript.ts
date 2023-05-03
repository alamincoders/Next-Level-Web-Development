const PromiseData = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Hello world!";
    if (data) {
      return resolve(data);
    } else {
      reject("Failed to get data");
    }
  });
};

const getData = async (): Promise<string> => {
  const data = await PromiseData();
  return data;
};

// boolean
const PromiseData2 = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      return resolve(data);
    } else {
      reject("Failed to get data");
    }
  });
};

const getData2 = async (): Promise<boolean> => {
  const data = await PromiseData2();
  return data;
};

//object
interface IData {
  message: string;
}
const PromiseData3 = (): Promise<IData> => {
  return new Promise<IData>((resolve, reject) => {
    const data: IData = { message: "Hello world!" };
    if (data) {
      return resolve(data);
    } else {
      reject("Failed to get data");
    }
  });
};

const getData3 = async (): Promise<IData> => {
  const data = await PromiseData3();
  return data;
};

//  fetch data from json place holder

type FetchDataType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchData = async (): Promise<FetchDataType> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};

const getResponse = async (): Promise<void> => {
  const result = await fetchData();
  console.log(result);
};

getResponse();
