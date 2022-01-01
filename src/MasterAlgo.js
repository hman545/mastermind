let MasterAlgo = {

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
        if (allowRepeatedColors==false){
            for (let x=0; x <(numberOfColors); x++){
                for (let y = 0; y<(numberOfColors); y++){
                    for (let z = 0; z<(numberOfColors); z++){
                        for (let w = 0; w<(numberOfColors); w++){
                            if (x!=y&&x!=z&&x!=w&&y!=x&&y!=z&&y!=w&&z!=x&&z!=y&&z!=w&&w!=x&&w!=y&&w!=z){
                                possibleCodes.push([x,y,z,w]);
                            }
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
            if (guess[i]==code[i]){
                r++;
            }else{            
                for(let h = 0; h<4; h++){
                    if(guess[i]==code[h]&&guess[h]!=code[h]){
                    w++;
                    break;
                    }
                }
            }
      }
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
