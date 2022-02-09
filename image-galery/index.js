const url = 'https://api.unsplash.com/photos/random?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }
  getData();