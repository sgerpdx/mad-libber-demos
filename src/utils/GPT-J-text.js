import request from "superagent";

// URL format with context and params:
// `http://api.vicgalle.net:5000/generate?context=${word1}%20${word2}.&token_max_length=512&temperature=1&top_p=0.9`

export async function generateText(word1, word2) {
  const baseURL = `http://api.vicgalle.net:5000/generate`;

  const params = {
    context: `${word1} ${word2}`,
    token_max_length: 512,
    temperature: 1.0,
    top_p: 0.9,
  };

  const headers = {
    Accept: "application/json",
  };

  const response = await request.post(baseURL, {
    json: params,
    headers: headers,
  });
  const newStory = response.body;
  console.log(newStory);
  return newStory.text;
}

//// syntax for setting headers:
// request
//    .get('/search')
//    .set('API-Key', 'foobar')
//    .set('Accept', 'application/json')
//    .then(callback);

//    .set("Access-Control-Allow-Origin", "*");
