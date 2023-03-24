const methods = {};
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
methods.getAnswer = (q) => {
    return new Promise(async(resolve, reject) => {
        console.log(q);
        try{
            openai.createCompletion({
                model: "text-davinci-003",
                prompt: q,
                max_tokens:2048,
            }).then((data)=>{
                console.log(data.data.choices[0].text)
                resolve({status:200,message:data.data.choices[0].text});

            });

        }catch(e){
            reject(e);
        }
    })
}


module.exports = methods;
// module.exports = getAns();