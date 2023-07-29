function ClacTemp() {
    const temp = document.getElementById('data').value;
    console.log(temp)
    const tempselect = document.getElementById('unit');
    const valuetemp = unit.options[tempselect.selectedIndex].value;

    let result;

    if(valuetemp=='CtoF'){
        result = ((temp * 1.8) + 32);
        document.getElementById('result').innerText = `${temp}°C = ${result}°F`;
    }
    else if(valuetemp=='FtoC'){
        result = ((temp-32)*(5/9));
        document.getElementById('result').innerText = `${temp}°F = ${result}°C`;
    }
    else if(valuetemp=='KtoC'){
        result = temp - 273.15;
        document.getElementById('result').innerText = `${temp} K = ${result}°C`;
    }
    else if(valuetemp=='FtoK'){
        result = (((temp-32)*(5/9))+273.15);
        document.getElementById('result').innerText = `${temp}°F = ${result} K`;
    }
    else if(valuetemp=='KtoF'){
        result = (((temp-273.15)*(9/5))+32);
        document.getElementById('result').innerText = `${temp} K = ${result}°F`;
    }

}