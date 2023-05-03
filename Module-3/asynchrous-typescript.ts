const getData = () => {
  new Promise((resolve, reject) => {
    const data = "Hello world!";
    if (data) {
      return resolve(data);
    } else {
      reject("Failed to get data");
    }
  });
};

const result = getData();