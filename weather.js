const text = document.querySelector("#weather_info");
const api = "68oa1SaDp87HKnYGO79Joq8hEeKqqpPd";
const lat = 37.386420100743386;
const lon= -5.993187265006076;
const base = 
`https://api.open-meteo.com/v1/forecast?latitude=37.386420100743386&longitude=-5.993187265006076&current=temperature_2m,apparent_temperature,is_day,weather_code&daily=sunrise,sunset&timezone=auto`;

const codes={
	"0":{
		"code": "clear",
		"day":{
			"description":"hace sol.",
		},
		"night":{
			"description":"el cielo está despejado.",
		}
	},
	"1":{
		"code": "mainly_clear",
		"day":{
			"description":"el cielo está mayormente soleado.",
		},
		"night":{
			"description":"el cielo está mayormente despejado.",
		}
	},
	"2":{
		"code": "partly_cloudy",
		"day":{
			"description":"hay algunas nubes.",
		},
		"night":{
			"description":"el cielo está parcialmente nublado.",
		}
	},
	"3":{
		"code": "cloudy",
		"day":{
			"description":"el cielo está nublado.",
		},
		"night":{
			"description":"el cielo está nublado",
		}
	},
	"45":{
		"code": "foggy",
		"day":{
			"description":"hay niebla.",
		},
		"night":{
			"description":"hay niebla.",
		}
	},
	"48":{
		"code": "rime_fog",
		"day":{
			"description":"hay escarcha.",
		},
		"night":{
			"description":"hay escarcha.",
		}
	},
	"51":{
		"code": "light_drizzle",
		"day":{
			"description":"hay un poco de llovizna.",
		},
		"night":{
			"description":"hay un poco de llovizna.",
		}
	},
	"53":{
		"code": "drizzle",
		"day":{
			"description":"hay llovizna.",
		},
		"night":{
			"description":"hay llovizna.",
		}
	},
	"55":{
		"code": "heavy_drizzle",
		"day":{
			"description":"hay bastante llovizna.",
		},
		"night":{
			"description":"hay bastante llovizna.",
		}
	},
	"56":{
		"code": "light_freezing_drizzle",
		"day":{
			"description":"hay un poco de llovizna gélida.",
		},
		"night":{
			"description":"hay un poco de llovizna gélida.",
		}
	},
	"57":{
		"code": "freezing_drizzle",
		"day":{
			"description":"hay llovizna gélida.",
		},
		"night":{
			"description":"hay llovizna gélida.",
		}
	},
	"61":{
		"code": "light_rain",
		"day":{
			"description":"está lloviendo un poco.",
		},
		"night":{
			"description":"está lloviendo un poco.",
		}
	},
	"63":{
		"code": "rain",
		"day":{
			"description":"está lloviendo.",
		},
		"night":{
			"description":"está lloviendo.",
		}
	},
	"65":{
		"code": "heavy_rain",
		"day":{
			"description":"está lloviendo mucho.",
		},
		"night":{
			"description":"está lloviendo mucho.",
		}
	},
	"66":{
		"code": "light_freezing_rain",
		"day":{
			"description":"hay un poco de lluvia engelante.",
		},
		"night":{
			"description":"hay un poco de lluvia engelante.",
		}
	},
	"67":{
		"code": "freezing_rain",
		"day":{
			"description":"hay lluvia engelante.",
		},
		"night":{
			"description":"hay lluvia engelante.",
		}
	},
	"71":{
		"code": "light_snow",
		"day":{
			"description":"está nevando un poco!! en Sevilla?!",
		},
		"night":{
			"description":"está nevando un poco!! en Sevilla?!",
		}
	},
	"73":{
		"code": "snow",
		"day":{
			"description":"está nevando!! qué?!",
		},
		"night":{
			"description":"está nevando!! qué?!",
		}
	},
	"75":{
		"code": "heavy_snow",
		"day":{
			"description":"está nevando mucho!! es el fin del mundo?!",
		},
		"night":{
			"description":"está nevando mucho!! es el fin del mundo?!",
		}
	},
	"77":{
		"code": "snow_grains",
		"day":{
			"description":"hay gránulos de nieve.",
		},
		"night":{
			"description":"hay gránulos de nieve.",
		}
	},
	"80":{
		"code": "light_showers",
		"day":{
			"description":"hay un poco de lluvia repentina.",
		},
		"night":{
			"description":"hay un poco de lluvia repentina.",
		}
	},
	"81":{
		"code": "showers",
		"day":{
			"description":"está callendo un chaparrón.",
		},
		"night":{
			"description":"está callendo un chaparrón.",
		}
	},
	"82":{
		"code": "heavy_showers",
		"day":{
			"description":"está callendo un fuerte chaparrón.",
		},
		"night":{
			"description":"está callendo un fuerte chaparrón",
		}
	},
	"85":{
		"code": "light_snow_showers",
		"day":{
			"description":"está callendo un pequeño chaparrón de nieve!!",
		},
		"night":{
			"description":"está callendo un pequeño chaparrón de nieve!!",
		}
	},
	"86":{
		"code": "snow_showers",
		"day":{
			"description":"está callendo un chaparrón de nieve!!",
		},
		"night":{
			"description":"está callendo un chaparrón de nieve!!",
		}
	},
	"95":{
		"code": "storm",
		"day":{
			"description":"hay tormenta. qué miedo!",
		},
		"night":{
			"description":"hay tormenta. qué miedo!",
		}
	},
	"96":{
		"code": "light_storm_hail",
		"day":{
			"description":"hay una tormenta leve con granizo. qué miedo!",
		},
		"night":{
			"description":"hay una tormenta leve con granizo. qué miedo!",
		}
	},
	"99":{
		"code": "storm_hail",
		"day":{
			"description":"hay una tormenta con granizo. cuidado!",
		},
		"night":{
			"description":"hay una tormenta con granizo. cuidado!",
		}
	}
}

fetch(base)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let date = new Date(data.current.time);
        let date_formatted = date.toLocaleDateString("es-ES", options);
        let temp = Math.round(data.current.temperature_2m);
        let temp2 = Math.round(data.current.apparent_temperature);
        let code = data.current.weather_code;
		let description = "";
        let is_day = data.current.is_day;
        if(is_day) {
            description = codes[code].day.description;
        } else {
            description = codes[code].night.description;
        }

		let now = new Date();
		let sunrise = (new Date(data.daily.sunrise[0]) - now) / 60000;
		let sunset = (new Date(data.daily.sunset[0]) - now) / 60000;
		let is_sunrise = sunrise < 15 && sunrise > - 45;
		let is_sunset = sunset > -15 && sunset < 45;

		let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
		let mins = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
        text.textContent =
        `hoy es ${date_formatted}. son las ${hours}:${mins} 
		en Sevilla. hace ${temp}º y se siente como ${temp2}º. ${description}`;
    
		// set page theme
		
		if(is_sunrise) {
			document.documentElement.classList.add('sunrise');
		} else if(is_sunset) {
			document.documentElement.classList.add('sunset');
		} else {
			document.documentElement.classList.add(is_day ? 'day' : 'night');
			document.documentElement.classList.add(codes[code].code);
		}
	});