import request from "superagent";

const URL = `http://api.vicgalle.net:5000/generate?context=Five%20dolphins%20flew%20through%20a%20shopping%20mall.&token_max_length=512&temperature=1&top_p=0.9`;

export async function generateText() {
  const response = await request.get("https://swapi.dev/api/people/1");
  const newText = response.body;
  console.log(newText);
  return newText.name;
}

//// syntax for setting headers:
// request
//    .get('/search')
//    .set('API-Key', 'foobar')
//    .set('Accept', 'application/json')
//    .then(callback);

//    .set("Access-Control-Allow-Origin", "*");

// `http://api.vicgalle.net:5000/generate?context=${word1}%20${word2}.&token_max_length=512&temperature=1&top_p=0.9`
