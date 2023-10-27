function sleep(ms)
{
    return new Promise((resolve) => setTimeout(resolve,ms));
}
const phrases=["Programmer","Freelancer","Developer","Designer"];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhaseIndex = 0;

const writeloop = async() => {
    while (true) {
        let curword = phrases[curPhaseIndex];

        for(let i=0; i < curword.length; i++)
        {
            el.innerText = curword.substring(0, i+1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);

        for(let i=curword.length; i > 0; i--)
        {
            el.innerText = curword.substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5);

        if(curPhaseIndex === phrases.length - 1)
        {
            curPhaseIndex = 0;
        }
        else
        {
           curPhaseIndex++;     
        }

    }
};
writeloop();
