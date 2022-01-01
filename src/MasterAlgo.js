let MasterAlgo = {
    demoFunc: () => {
        console.log("Hi");
    },

    convertNumToStr: (num) => {
        if (num==0) return 'r';
        if (num==1) return 'y';
        if (num==2) return 'g';
        if (num==3) return 'bl';
        if (num==4) return 'b';
        if (num==5) return 'w';
        return 'error in num';
    },
    //TODO
    convertStrToNum: (str) => {
        if (str=='r') return 0;
        if (str=='y') return 0;
        if (str=='g') return 0;
        if (str=='bl') return 0;
        if (str=='b') return 0;
        if (str=='w') return 0;
        return 'error in str';
    },
    //TODO
    getAllStartingCodes: (numberOfColors, allowRepeatedColors)=>{
        // returns an array containing all of the possible mastermind codes in existance.
        // ex: [ [0,1,2,3], [0,1,2,4],.... [9,9,9,9] ]
        let possibleCodes= [];
        if (allowRepeatedColors==true){
            for (let x=0; x <(numberOfColors); x++){
                for (let y = 0; y<(numberOfColors); y++){
                    for (let z = 0; z<(numberOfColors); z++){
                        for (let w = 0; w<(numberOfColors); w++){
                            possibleCodes.push([x,y,z,w]);
                        }
                    }
                }
            }
        }
        return possibleCodes;
    },
    scoreAGuess: (guess, code) => {
      //[2,1,4,5]
      // "numPo"
      // "numCo"
      //guess: [0,4,5,1]
      //code: [3,2,0,1];
      //expected return: r=1, w=1
      let r =0;
      let w =0;
      for (let i = 0; i<4; i++){
          console.log("--");
            if (guess[i]==code[i]){
                r++;
                console.log("R 1: "+r);
                console.log("W 1: "+w);
            }else{            
                for(let h = 0; h<4; h++){
                    if(guess[i]==code[h]&&guess[h]!=code[h]){
                    w++;
                    console.log("R 2: "+r);
                    console.log("W 2: "+w);
                    }
                }
            }
      }
      console.log("R: "+r);
      console.log("W: "+w);
      return {
        "numPositions":r,
        "numJustColors":w,
      };

    },
    prunePossibleCodes: (guess, score, currentPossibleMasterCodes) => {
        let r = score["numPositions"];
        let w = score["numJustColors"];
        let newMasterCodes = [];
        for (let i = 0; i<currentPossibleMasterCodes.length; i++){
            let temporary= MasterAlgo.scoreAGuess(guess, currentPossibleMasterCodes[i]);
            let rtemp = temporary["numPositions"];
            let wtemp = temporary["numJustColors"];
            if(rtemp==r&&wtemp==w){
                newMasterCodes.push(currentPossibleMasterCodes[i]);
            }
        }
        return newMasterCodes;
    }

};

export default MasterAlgo;
