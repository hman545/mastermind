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
        if (allowRepeatedColors==false){
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
    }

};

export default MasterAlgo;
