class CatService {
  constructor() {}

  getFacts() {
    const url = "https://cat-fact.herokuapp.com";
    const factsUrl = "/facts";
    console.log("try to contact api fetch backend");
    const factsPromise = fetch(url + factsUrl).then((data) => {
      console.log("got response from backend, converting data to json...");
      return data.json();
    });

    return factsPromise;
  }
}
const catService = new CatService();
export default catService;
