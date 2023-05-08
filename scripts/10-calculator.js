let calculation = localStorage.getItem('calc') ||  '';
        const outputDisplayElement = document.querySelector('.js-outputDisplay');
        outputDisplayElement.innerHTML = calculation;
        function updateCalculation(value){
            calculation += value;
            //console.log(calculation);
            outputDisplayElement.innerHTML = calculation;
            localStorage.setItem('calc',calculation)
            
        };
        function clearCalulation(){
            calculation ='0';
            outputDisplayElement.innerHTML = calculation;
            calculation ='';
        }