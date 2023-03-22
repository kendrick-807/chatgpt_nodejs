const methods = {};
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});
let ans;
const openai = new OpenAIApi(configuration);
methods.getAnswer = (q) => {
    return new Promise(async(resolve, reject) => {
        console.log(q);
        try{
            openai.createCompletion({
                model: "text-davinci-003",
                prompt: q,
            }).then((data)=>{
                ans = data.data.choices[0].text;
                resolve({status:200,message:data.data.choices[0].text});

            });

        }catch(e){
            reject(e);
        }
    })
}

function getAns(){
    return ans;
}
module.exports = methods;
// module.exports = getAns();