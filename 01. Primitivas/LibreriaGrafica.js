/** Clase con funciones para hacer gráficos
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (noviembre de 2022)
 * */
class LibreriaGrafica{
	/**
	 * Captura el área gráfica (canvas)
	 * @param {HTMLCanvasElement} Lienzo - El lienzo (id del canvas) de HTML5
	 */
	constructor (Lienzo){
		this.Lienzo = Lienzo;
		this.Contexto = Lienzo.getContext('2d');
	}

	/**
	 * Retorna el alto del área gráfica o lienzo
	 * @return {int} Alto
	 */
	LienzoAlto(){
		return this.Lienzo.height;
	}

	/**
	 * Retorna el ancho del área gráfica o lienzo
	 * @return {int} Ancho
	 */
	LienzoAncho(){
		return this.Lienzo.width;
	}

	/**
	 * Dibuja el perímetro del lienzo
	 * @param {int} GrosorBorde - Grosor de la línea del perímetro
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal que tendrá la línea del perímetro
	 */
	LienzoBorde(GrosorBorde, ColorBorde){
        this.Rectangulo(0, 0, this.Lienzo.width, this.Lienzo.height, GrosorBorde, ColorBorde);
	}

	/**
	 * Poner un color de fondo al lienzo
	 * @param {CanvasRenderingContext2D} ColorFondo - Color expresado en hexadecimal que tendrá el fondo del lienzo
	 */
    LienzoFondo(ColorFondo){
        this.RectanguloRelleno(0, 0, this.Lienzo.width, this.Lienzo.height, ColorFondo);
    }

	/**
	 * Fondo y borde del lienzo
	 * @param {CanvasRenderingContext2D} ColorFondo - Color expresado en hexadecimal que tendrá el fondo del lienzo
	 * @param {int} GrosorBorde - Grosor de la línea del perímetro
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal que tendrá la línea del perímetro
	 */
	LienzoFondoBorde(ColorFondo, GrosorBorde, ColorBorde){
		this.LienzoFondo(ColorFondo);
		this.LienzoBorde(GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una línea recta
	 * @param {int} Xinicio - Valor X de la coordenada inicial
	 * @param {int} Yinicio - Valor Y de la coordenada inicial
	 * @param {int} Xfin - Valor X de la coordenada final
	 * @param {int} Yfin - Valor Y de la coordenada final
	 * @param {int} GrosorLinea - Grosor de la línea
	 * @param {CanvasRenderingContext2D} ColorLinea - Color expresado en hexadecimal que tendrá la línea
	 */
	Linea(Xinicio, Yinicio, Xfin, Yfin, GrosorLinea, ColorLinea){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorLinea;
		this.Contexto.strokeStyle = ColorLinea;
		this.Contexto.moveTo(Xinicio, Yinicio); //Mueve el cursor a la posición
		this.Contexto.lineTo(Xfin, Yfin); //Hace una línea
		this.Contexto.stroke(); //Hace visible la línea
		this.Contexto.closePath();
	}
	
	/**
	 * Dibuja las líneas que conectan varios puntos
	 * @param {Punto[]} Puntos - Lista de objetos de la clase Punto
	 * @param {int} GrosorLinea - Grosor de la línea
	 * @param {CanvasRenderingContext2D} ColorLinea - Color expresado en hexadecimal que tendrá la línea
	 */
	LineasPuntos(Puntos, GrosorLinea, ColorLinea){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorLinea;
		this.Contexto.strokeStyle = ColorLinea;
		this.Contexto.moveTo(Puntos[0].posX, Puntos[0].posY); //Punto inicial
		for(let cont = 1; cont < Puntos.length; cont++)
			this.Contexto.lineTo(Puntos[cont].posX, Puntos[cont].posY);
		this.Contexto.stroke(); //Hace visible la línea
		this.Contexto.closePath();
	}

	/**
	 * Dibuja las líneas que hay en un listado
	 * @param {Linea[]} LineaLst - Lista de objetos de la clase Linea
	 */
	LineasListas(LineaLst){
		for(let cont = 0; cont < LineaLst.length; cont++)
			this.LineaObj(LineaLst[cont]);
	}
	
	/**
	 * Dibuja una línea dado el objeto línea
	 * @param {Linea} obj - Objeto Línea
	 */
	LineaObj(obj){
		this.Linea(obj.posXini, obj.posYini, obj.posXfin, obj.posYfin, obj.Grosor, obj.Color);		
	}		

	/**
	 * Dibuja un triángulo dada las coordenadas
	 * @param {int} posX1 - Valor X de la primera coordenada
	 * @param {int} posY1 - Valor Y de la primera coordenada
	 * @param {int} posX2 - Valor X de la segunda coordenada
	 * @param {int} posY2 - Valor Y de la segunda coordenada
	 * @param {int} posX3 - Valor X de la tercera coordenada
	 * @param {int} posY3 - Valor Y de la tercera coordenada
	 * @param {int} GrosorBorde - Grosor del borde del triángulo
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Triangulo(posX1, posY1, posX2, posY2, posX3, posY3, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		this.Contexto.moveTo(posX1, posY1); //Mueve el cursor a la posición
		this.Contexto.lineTo(posX2, posY2);
		this.Contexto.lineTo(posX3, posY3);
		this.Contexto.lineTo(posX1, posY1);
		this.Contexto.stroke(); //Hace visible el triángulo
		this.Contexto.closePath();
	}
	
	/**
	 * Dibuja un triángulo relleno dada las coordenadas
	 * @param {int} posX1 - Valor X de la primera coordenada
	 * @param {int} posY1 - Valor Y de la primera coordenada
	 * @param {int} posX2 - Valor X de la segunda coordenada
	 * @param {int} posY2 - Valor Y de la segunda coordenada
	 * @param {int} posX3 - Valor X de la tercera coordenada
	 * @param {int} posY3 - Valor Y de la tercera coordenada
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	TrianguloRelleno(posX1, posY1, posX2, posY2, posX3, posY3, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		this.Contexto.moveTo(posX1, posY1); //Mueve el cursor a la posición
		this.Contexto.lineTo(posX2, posY2);
		this.Contexto.lineTo(posX3, posY3);
		this.Contexto.lineTo(posX1, posY1);
		this.Contexto.fill(); //Rellena con el color
		this.Contexto.closePath();
	}

	/**
	 * Dibuja un triángulo relleno de un color y borde de otro color
	 * @param {int} posX1 - Valor X de la primera coordenada
	 * @param {int} posY1 - Valor Y de la primera coordenada
	 * @param {int} posX2 - Valor X de la segunda coordenada
	 * @param {int} posY2 - Valor Y de la segunda coordenada
	 * @param {int} posX3 - Valor X de la tercera coordenada
	 * @param {int} posY3 - Valor Y de la tercera coordenada
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {int} GrosorBorde - Grosor del borde del triángulo
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	TrianguloRellenoBorde(posX1, posY1, posX2, posY2, posX3, posY3, ColorRelleno, GrosorBorde, ColorBorde){
		this.TrianguloRelleno(posX1, posY1, posX2, posY2, posX3, posY3, ColorRelleno);
		this.Triangulo(posX1, posY1, posX2, posY2, posX3, posY3, GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una lista de triángulos
	 * @param {Triangulo[]} TrianguloLst - Lista de objetos de la clase Triangulo
	 */
	TrianguloLista(TrianguloLst){
		for(let cont = 0; cont < TrianguloLst.length; cont++)
			this.TrianguloObj(TrianguloLst[cont]);
	}
	
	/**
	 * Dibuja un triángulo dado el objeto triángulo
	 * @param {Triangulo} obj - Objeto Triangulo
	 */
	TrianguloObj(obj){
		switch(obj.Tipo) {
			case 1: this.Triangulo(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.GrosorBorde, obj.ColorBorde); break;
			case 2: this.TrianguloRelleno(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.ColorRelleno); break;
			case 3: this.TrianguloRellenoBorde(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.ColorRelleno, obj.GrosorBorde, obj.ColorBorde); break;
		}
	}

	/**
	 * Dibuja un rectángulo
	 * @param {int} posX - Posición X de la coordenada superior izquierda del rectángulo
	 * @param {int} posY - Posición Y de la coordenada superior izquierda del rectángulo
	 * @param {int} Ancho - Ancho del rectángulo
	 * @param {int} Alto - Alto del rectángulo
	 * @param {int} GrosorBorde - Grosor del borde del rectángulo
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Rectangulo(posX, posY, Ancho, Alto, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		this.Contexto.rect(posX, posY, Ancho, Alto);
		this.Contexto.stroke(); //Hace visible el rectángulo
		this.Contexto.closePath();
	}
	
	/**
	 * Dibuja un rectángulo relleno
	 * @param {int} posX - Posición X de la coordenada superior izquierda del rectángulo
	 * @param {int} posY - Posición Y de la coordenada superior izquierda del rectángulo
	 * @param {int} Ancho - Ancho del rectángulo
	 * @param {int} Alto - Alto del rectángulo
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	RectanguloRelleno(posX, posY, Ancho, Alto, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		this.Contexto.fillRect(posX, posY, Ancho, Alto);
		this.Contexto.closePath();
	}

	/**
	 * Dibuja un rectángulo relleno con borde
	 * @param {int} posX - Posición X de la coordenada superior izquierda del rectángulo
	 * @param {int} posY - Posición Y de la coordenada superior izquierda del rectángulo
	 * @param {int} Ancho - Ancho del rectángulo
	 * @param {int} Alto - Alto del rectángulo
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {int} GrosorBorde - Grosor del borde del rectángulo
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	RectanguloRellenoBorde(posX, posY, Ancho, Alto, ColorRelleno, GrosorBorde, ColorBorde){
		this.RectanguloRelleno(posX, posY, Ancho, Alto, ColorRelleno);
		this.Rectangulo(posX, posY, Ancho, Alto, GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una lista de rectángulos
	 * @param {Rectangulo[]} RectanguloLst - Lista de objetos de la clase Rectangulo
	 */
	RectanguloLista(RectanguloLst){
		for(let cont = 0; cont < RectanguloLst.length; cont++)
			this.RectanguloObj(RectanguloLst[cont]);
	}
	
	/**
	 * Dibuja un rectángulo dado el objeto rectángulo
	 * @param {Rectangulo} obj - Objeto Rectangulo
	 */
	RectanguloObj(obj){
		switch(obj.Tipo){
			case 1: this.Rectangulo(obj.posX, obj.posY, obj.Ancho, obj.Alto, obj.GrosorBorde, obj.ColorBorde); break;
			case 2: this.RectanguloRelleno(obj.posX, obj.posY, obj.Ancho, obj.Alto, obj.ColorRelleno); break;
			case 3: this.RectanguloRellenoBorde(obj.posX, obj.posY, obj.Ancho, obj.Alto, obj.ColorRelleno, obj.GrosorBorde, obj.ColorBorde); break;			
		}
	}

	/**
	 * Dibujar un polígono de 4 lados
	 * @param {int} posX1 - Valor X de la primera coordenada
	 * @param {int} posY1 - Valor Y de la primera coordenada
	 * @param {int} posX2 - Valor X de la segunda coordenada
	 * @param {int} posY2 - Valor Y de la segunda coordenada
	 * @param {int} posX3 - Valor X de la tercera coordenada
	 * @param {int} posY3 - Valor Y de la tercera coordenada
	 * @param {int} posX4 - Valor X de la cuarta coordenada
	 * @param {int} posY4 - Valor Y de la cuarta coordenada
	 * @param {int}  GrosorBorde - Grosor del borde del rectángulo
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Poligono4Lados(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		this.Contexto.moveTo(posX1, posY1); //Mueve el cursor a la posición
		this.Contexto.lineTo(posX2, posY2);
		this.Contexto.lineTo(posX3, posY3);
		this.Contexto.lineTo(posX4, posY4);
		this.Contexto.lineTo(posX1, posY1);
		this.Contexto.stroke(); //Hace visible el polígono
		this.Contexto.closePath();
	}

	/**
	 * Dibujar un polígono de 4 lados relleno
	 * @param {int} posX1 - Valor X de la primera coordenada
	 * @param {int} posY1 - Valor Y de la primera coordenada
	 * @param {int} posX2 - Valor X de la segunda coordenada
	 * @param {int} posY2 - Valor Y de la segunda coordenada
	 * @param {int} posX3 - Valor X de la tercera coordenada
	 * @param {int} posY3 - Valor Y de la tercera coordenada
	 * @param {int} posX4 - Valor X de la cuarta coordenada
	 * @param {int} posY4 - Valor Y de la cuarta coordenada
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	Poligono4LadosRelleno(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		this.Contexto.moveTo(posX1, posY1); //Mueve el cursor a la posición
		this.Contexto.lineTo(posX2, posY2);
		this.Contexto.lineTo(posX3, posY3);
		this.Contexto.lineTo(posX4, posY4);
		this.Contexto.lineTo(posX1, posY1);
		this.Contexto.fill(); //Rellena con el color
		this.Contexto.closePath();
	}

	/**
	 * Dibujar un polígono de 4 lados relleno
	 * @param {int} posX1 - Valor X de la primera coordenada
	 * @param {int} posY1 - Valor Y de la primera coordenada
	 * @param {int} posX2 - Valor X de la segunda coordenada
	 * @param {int} posY2 - Valor Y de la segunda coordenada
	 * @param {int} posX3 - Valor X de la tercera coordenada
	 * @param {int} posY3 - Valor Y de la tercera coordenada
	 * @param {int} posX4 - Valor X de la cuarta coordenada
	 * @param {int} posY4 - Valor Y de la cuarta coordenada
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {int} GrosorBorde - Grosor del borde del rectángulo
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Poligono4LadosRellenoBorde(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, ColorRelleno, GrosorBorde, ColorBorde){
		this.Poligono4LadosRelleno(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, ColorRelleno);
		this.Poligono4Lados(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una lista de polígonos de 4 lados
	 * @param {Poligono4Lados[]} Poligono4LadosLst - Lista de objetos de la clase Poligono4Lados
	 */
	Poligono4LadosLista(Poligono4LadosLst){
		for(let cont = 0; cont < Poligono4LadosLst.length; cont++)
			this.Poligono4LadosObj(Poligono4LadosLst[cont]);
	}
	
	/**
	 * Dibuja un polígono de 4 lados dado el objeto polígono de 4 lados
	 * @param {Poligono4Lados} obj - Objeto Poligono4Lados
	 */
	Poligono4LadosObj(obj){
		switch(obj.Tipo){
			case 1: this.Poligono4Lados(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.posX4, obj.posY4, obj.GrosorBorde, obj.ColorBorde); break;
			case 2: this.Poligono4LadosRelleno(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.posX4, obj.posY4, obj.ColorRelleno); break;
			case 3: this.Poligono4LadosRellenoBorde(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.posX4, obj.posY4, obj.ColorRelleno, obj.GrosorBorde, obj.ColorBorde); break;		
		}
	}	

	/**
	 * Dibuja un polígono dados los puntos
	 * @param {Punto[]} Puntos - Lista de Puntos
	 * @param {int} GrosorBorde - Grosor del borde
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Poligono(Puntos, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		this.Contexto.moveTo(Puntos[0].posX, Puntos[0].posY); //Punto inicial
		for(let cont = 1; cont < Puntos.length; cont++)
			this.Contexto.lineTo(Puntos[cont].posX, Puntos[cont].posY);
		this.Contexto.lineTo(Puntos[0].posX, Puntos[0].posY);
		this.Contexto.stroke(); //Hace visible el polígono
		this.Contexto.closePath();
	}	
	
	/**
	 * Dibuja un polígono relleno dados los puntos
	 * @param {Punto[]} Puntos - Lista de Puntos
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	PoligonoRelleno(Puntos, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		this.Contexto.moveTo(Puntos[0].posX, Puntos[0].posY); //Punto inicial
		for(let cont = 1; cont < Puntos.length; cont++)
			this.Contexto.lineTo(Puntos[cont].posX, Puntos[cont].posY);
		this.Contexto.fill(); //Rellena con el color
		this.Contexto.closePath();
	}

	/**
	 * Dibujar polígono relleno con borde
	 * @param {Punto[]} Puntos - Lista de Puntos
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {int} GrosorBorde - Grosor del borde
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	PoligonoRellenoBorde(Puntos, ColorRelleno, GrosorBorde, ColorBorde){
		this.PoligonoRelleno(Puntos, ColorRelleno);
		this.Poligono(Puntos, GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una curva Bézier
	 * @param {int} IniX - Valor X de la coordenada inicial
	 * @param {int} IniY - Valor Y de la coordenada inicial
	 * @param {int} ControlX1 - Valor X de la primera coordenada de control
	 * @param {int} ControlY1 - Valor Y de la primera coordenada de control
	 * @param {int} ControlX2 - Valor X de la segunda coordenada de control
	 * @param {int} ControlY2 - Valor Y de la segunda coordenada de control
	 * @param {int} FinalX3 - Valor X de la coordenada final
	 * @param {int} FinalY3 - Valor Y de la coordenada final
	 * @param {int} GrosorLinea - Grosor de la línea
	 * @param {CanvasRenderingContext2D} ColorLinea - Color expresado en hexadecimal para la linea
	 */
	Bezier(IniX, IniY, ControlX1, ControlY1, ControlX2, ControlY2, FinalX3, FinalY3, GrosorLinea, ColorLinea){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorLinea;
		this.Contexto.strokeStyle = ColorLinea;
		this.Contexto.moveTo(IniX, IniY); //Punto inicial
		this.Contexto.bezierCurveTo(ControlX1, ControlY1, ControlX2, ControlY2, FinalX3, FinalY3);
		this.Contexto.stroke(); //Hace visible la curva
		this.Contexto.closePath();
	}	
	
	/**
	 * Dibuja un arco
	 * @param {int} posX - Valor X de la coordenada central del arco
	 * @param {int} posY - Valor Y de la coordenada central del arco
	 * @param {int} Radio - Radio que tendrá el arco
	 * @param {int} angIni - Ángulo inicial en grados del arco
	 * @param {int} angFin - Ángulo final en grados del arco
	 * @param {int} GrosorLinea - Grosor de la línea
	 * @param {CanvasRenderingContext2D} ColorLinea - Color expresado en hexadecimal para la línea
	 * @param {bool} DibujaContraReloj - Si se dibuja el arco a contrareloj (true) o siguiendo las manecillas del reloj (false)
	 */
	Arco(posX, posY, Radio, angIni, angFin, GrosorLinea, ColorLinea, DibujaContraReloj){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorLinea;
		this.Contexto.strokeStyle = ColorLinea;
		let AnguloIni = angIni * Math.PI / 180; //Angulo inicial (0 grados) en radianes
		let AnguloFin = angFin * Math.PI / 180; //Angulo final (360 grados) en radianes
		this.Contexto.arc(posX, posY, Radio, AnguloIni, AnguloFin, DibujaContraReloj);
		this.Contexto.stroke(); //Hace visible la curva
		this.Contexto.closePath();
	}

	/**
	 * Dibuja una curva Cuadrática
	 * @param {int} IniX - Valor X de la coordenada inicial de la curva
	 * @param {int} IniY - Valor Y de la coordenada inicial de la curva
	 * @param {int} ControlX1 - Valor X de la coordenada de control de la curva
	 * @param {int} ControlY1 - Valor Y de la coordenada de control de la curva
	 * @param {int} FinalX2 - Valor X de la coordenada final de la curva
	 * @param {int} FinalY2 - Valor Y de la coordenada final de la curva
	 * @param {int} GrosorLinea - Grosor de la línea
	 * @param {CanvasRenderingContext2D} ColorLinea - Color expresado en hexadecimal para la línea
	 */
	CurvaCuadratica(IniX, IniY, ControlX1, ControlY1, FinalX2, FinalY2, GrosorLinea, ColorLinea){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorLinea;
		this.Contexto.strokeStyle = ColorLinea;
		this.Contexto.moveTo(IniX, IniY); //Punto inicial
		this.Contexto.quadraticCurveTo(ControlX1, ControlY1, FinalX2, FinalY2);
		this.Contexto.stroke(); //Hace visible la curva
		this.Contexto.closePath();
	}
	
	/**
	 * Dibuja una elipse
	 * @param {int} posX - Coordenada X del centro de la elipse
	 * @param {int} posY - Coordenada Y del centro de la elipse
	 * @param {int} RadioX - Radio en el eje X de la elipse
	 * @param {int} RadioY - Radio en el eje Y de la elipse
	 * @param {int} RotaElipse - Rotación de la elipse en grados
	 * @param {int} angIni - Ángulo inicial en grados de dibujo de la elipse
	 * @param {int} angFin - Ángulo final en grados de dibujo de la elipse
	 * @param {int} ContraReloj - Si se dibuja la elipse a contrareloj (true) o siguiendo las manecillas del reloj (false)
	 * @param {int} GrosorBorde - Grosor del borde
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Elipse(posX, posY, RadioX, RadioY, RotaElipse, angIni, angFin, ContraReloj, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		let AnguloIni = angIni * Math.PI / 180; //Angulo inicial (0 grados) en radianes
		let AnguloFin = angFin * Math.PI / 180; //Angulo final (360 grados) en radianes
		let AnguloRota = RotaElipse * Math.PI / 180;
		this.Contexto.ellipse(posX, posY, RadioX, RadioY, AnguloRota, AnguloIni, AnguloFin, ContraReloj);
		this.Contexto.stroke(); //Hace visible la elipse
		this.Contexto.closePath();
	}

	/**
	 * Dibuja una elipse rellena
	 * @param {int} posX - Coordenada X del centro de la elipse
	 * @param {int} posY - Coordenada Y del centro de la elipse
	 * @param {int} RadioX - Radio en el eje X de la elipse
	 * @param {int} RadioY - Radio en el eje Y de la elipse
	 * @param {int} RotaElipse - Rotación de la elipse en grados
	 * @param {int} angIni - Ángulo inicial en grados de dibujo de la elipse
	 * @param {int} angFin - Ángulo final en grados de dibujo de la elipse
	 * @param {int} ContraReloj - Si se dibuja la elipse a contrareloj (true) o siguiendo las manecillas del reloj (false)
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	ElipseRellena(posX, posY, RadioX, RadioY, RotaElipse, angIni, angFin, ContraReloj, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		let AnguloIni = angIni * Math.PI / 180; //Angulo inicial (0 grados) en radianes
		let AnguloFin = angFin * Math.PI / 180; //Angulo final (360 grados) en radianes
		let AnguloRota = RotaElipse * Math.PI / 180;
		this.Contexto.ellipse(posX, posY, RadioX, RadioY, AnguloRota, AnguloIni, AnguloFin, ContraReloj);
		this.Contexto.fill(); //Rellena con el color
		this.Contexto.closePath();
	}

	/**
	 * Dibuja una elipse rellena con borde
	 * @param {int} posX - Coordenada X del centro de la elipse
	 * @param {int} posY - Coordenada Y del centro de la elipse
	 * @param {int} RadioX - Radio en el eje X de la elipse
	 * @param {int} RadioY - Radio en el eje Y de la elipse
	 * @param {int} RotaElipse - Rotación de la elipse en grados
	 * @param {int} angIni - Ángulo inicial en grados de dibujo de la elipse
	 * @param {int} angFin - Ángulo final en grados de dibujo de la elipse
	 * @param {int} ContraReloj - Si se dibuja la elipse a contrareloj (true) o siguiendo las manecillas del reloj (false)
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {int} GrosorBorde - Grosor del borde
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	ElipseRellenaBorde(posX, posY, RadioX, RadioY, RotaElipse, angIni, angFin, ContraReloj, ColorRelleno, GrosorBorde, ColorBorde){
		this.Elipse(posX, posY, RadioX, RadioY, RotaElipse, angIni, angFin, ContraReloj, GrosorBorde, ColorBorde);
		this.ElipseRellena(posX, posY, RadioX, RadioY, RotaElipse, angIni, angFin, ContraReloj, ColorRelleno);
	}

	/**
	 * Dibuja una lista de elipses
	 * @param {Elipse[]} ElipseLst - Lista de objetos de la clase Elipse
	 */
	ElipseLista(ElipseLst){
		for(let cont = 0; cont < ElipseLst.length; cont++)
			this.ElipseObj(ElipseLst[cont]);
	}
	
	/**
	 * Dibuja una elipse dado el objeto elipse
	 * @param {Elipse} obj - Objeto Elipse
	 */
	ElipseObj(obj){
		switch(obj.Tipo){
			case 1: this.Elipse(obj.posX, obj.posY, obj.RadioX, obj.RadioY, obj.RotaFigura, obj.angIni, obj.angFin, obj.Reloj, obj.GrosorBorde, obj.ColorBorde); break;
			case 2: this.ElipseRellena(obj.posX, obj.posY, obj.RadioX, obj.RadioY, obj.RotaFigura, obj.angIni, obj.angFin, obj.Reloj, obj.ColorRelleno); break;
			case 3: this.ElipseRellenaBorde(obj.posX, obj.posY, obj.RadioX, obj.RadioY, obj.RotaFigura, obj.angIni, obj.angFin, obj.Reloj, obj.ColorRelleno, obj.GrosorBorde, obj.ColorBorde); break;		
		}
	}	

	/**
	 * Dibuja un círculo
	 * @param {int} posX - Coordenada X del centro del círculo
	 * @param {int} posY - Coordenada Y del centro del círculo
	 * @param {int} Radio - Radio del círculo
	 * @param {int} GrosorBorde - Grosor del perímetro del círculo
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Circulo(posX, posY, Radio, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		this.Contexto.arc(posX, posY, Radio, 0, 2 * Math.PI, false);
		this.Contexto.stroke(); //Dibuja el círculo
		this.Contexto.closePath();
	}

	/**
	 * Dibujar un círculo relleno
	 * @param {int} posX - Coordenada X del centro del círculo
	 * @param {int} posY - Coordenada Y del centro del círculo
	 * @param {int} Radio - Radio del círculo
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	CirculoRelleno(posX, posY, Radio, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		this.Contexto.arc(posX, posY, Radio, 0, 2 * Math.PI, false);
		this.Contexto.fill(); //Rellena con el color
		this.Contexto.closePath();
	}

	/**
	 * Dibujar un círculo relleno con borde
	 * @param {int} posX - Coordenada X del centro del círculo
	 * @param {int} posY - Coordenada Y del centro del círculo
	 * @param {int} Radio - Radio del círculo
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {int} GrosorBorde - Grosor del borde
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	CirculoRellenoBorde(posX, posY, Radio, ColorRelleno, GrosorBorde, ColorBorde) {
		this.CirculoRelleno(posX, posY, Radio, ColorRelleno);
		this.Circulo(posX, posY, Radio, GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una lista de círculos
	 * @param {Circulo[]} CirculoLst - Lista de círculos
	 */
	CirculoLista(CirculoLst){
		for(let cont = 0; cont < CirculoLst.length; cont++)
			this.CirculoObj(CirculoLst[cont]);
	}

	/**
	 * Dibuja un círculo dado el objeto círculo
	 * @param {Circulo} obj - Objeto círculo
	 */
	CirculoObj(obj){
		switch(obj.Tipo){
			case 1: this.Circulo(obj.posX, obj.posY, obj.Radio, obj.GrosorBorde, obj.ColorBorde); break;
			case 2: this.CirculoRelleno(obj.posX, obj.posY, obj.Radio, obj.ColorRelleno); break;
			case 3: this.CirculoRellenoBorde(obj.posX, obj.posY, obj.Radio, obj.ColorRelleno, obj.GrosorBorde, obj.ColorBorde); break;		
		}
	}

	/**
	 * Dibuja una cadena de texto con un color de borde
	 * @param {int} posX - Posición en X del texto
	 * @param {int} posY - Posición en Y del texto
	 * @param {string} Texto - Texto a mostrar en pantalla
	 * @param {CanvasRenderingContext2D} Color - Color expresado en hexadecimal para el texto
	 * @param {string} Fuente - Características de la fuente a usar
	 */
	DibujarCadenas(posX, posY, Texto, Color, Fuente){
		this.Contexto.beginPath();
		this.Contexto.font = Fuente; //Tipo, tamaño, fuente
		this.Contexto.strokeStyle = Color;
		this.Contexto.strokeText(Texto, posX, posY); //Inferior
		this.Contexto.closePath();
	}

	/**
	 * Dibuja una cadena de texto con color de relleno
	 * @param {int} posX - Posición en X del texto
	 * @param {int} posY - Posición en Y del texto
	 * @param {string} Texto - Texto a mostrar en pantalla
	 * @param {CanvasRenderingContext2D} Color - Color expresado en hexadecimal para el relleno del texto
	 * @param {string} Fuente - Características de la fuente a usar
	 */
	DibujarCadenasRelleno(posX, posY, Texto, Color, Fuente){
		this.Contexto.beginPath();
		this.Contexto.font = Fuente; //Tipo, tamaño, fuente
		this.Contexto.fillStyle = Color;
		this.Contexto.fillText(Texto, posX, posY); //Superior
		this.Contexto.closePath();
	}
	
	// ========================= GRAFICO MATEMATICO 2D  ==============================		

	/**
	 * Hace el gráfico matemático generado por la ecuación Y=F(X)
	 * @param {string} Ecuacion - Expresión matemático del tipo Y = F(X), por ejemplo Y = sen(X)-cos(2*X)+tan(X^3) . Se pueden usar las siguientes funciones sen() seno, cos() coseno, tan() tangente, abs() valor absoluto, asn() arcoseno, acs() arcocoseno, atn() arcotangente, log() logaritmo natural, cei() valor techo, exp() exponencial, sqr() raíz cuadrada; + suma, - resta, * multiplicación, / división, ^ potencia; paréntesis y una variable independiente X
	 * @param {double} Xini - Valor X inicial desde dónde se evalúa la ecuación
	 * @param {double} Xfin - Valor X final hasta dónde se evalúa la ecuación
	 * @param {int} numPuntos - Total de puntos que se van a calcular entre Xini y Xfin
	 * @param {int} Grosor - Grosor de la línea
	 * @param {CanvasRenderingContext2D} Color - Color expresado en hexadecimal para la línea
	 */
	Matematico2D(Ecuacion, Xini, Xfin, numPuntos, Grosor, Color){
		//Llama al evaluador de expresiones
		let evaluador2022 = new Evaluador4();
		evaluador2022.Analizar(Ecuacion);
		
		//Calcula los puntos de la ecuación a graficar
        let pasoX = (Xfin - Xini) / numPuntos;
        let Ymin = Number.MAX_VALUE; //El mínimo valor de Y obtenido
        let Ymax = -Ymin; //El máximo valor de Y obtenido
        let maximoXreal = -Ymin; //El máximo valor de X (difiere de Xfin)
            
        let puntos = [];
        for (let X = Xini; X <= Xfin; X += pasoX) {
			evaluador2022.DarValorVariable('x', X);
            let valY = -1*evaluador2022.Evaluar(); //Se invierte el valor porque el eje Y aumenta hacia abajo
            if (valY > Ymax) Ymax = valY;
            if (valY < Ymin) Ymin = valY;
            if (X > maximoXreal) maximoXreal = X;
            puntos.push(new Punto(X, valY));
        }
        
		//¡OJO! X puede que no llegue a ser Xfin, por lo que la variable maximoXreal almacena el valor máximo de X

        //Calcula los puntos a poner en la pantalla
        let convierteX = this.LienzoAncho() / (maximoXreal - Xini);
        let convierteY = this.LienzoAlto() / (Ymax - Ymin);

        for (let cont = 0; cont < puntos.length; cont++) {
            puntos[cont].posX = Math.round(convierteX * (puntos[cont].posX - Xini));
            puntos[cont].posY = Math.round(convierteY * (puntos[cont].posY - Ymin));
        }
		
		//Hace el gráfico
		this.LineasPuntos(puntos, Grosor, Color);		
    }

	/**
	 * Convierte los números RGB (Red, Green, Blue) en su equivalente hexadecimal de color
	 * @param {int} Rojo - Valor de 0 a 254 de rojo
	 * @param {int} Verde - Valor de 0 a 254 de verde
	 * @param {int} Azul - Valor de 0 a 254 de azul
	 * @return {string} Color en hexadecimal
	 */
	ColorRGB(Rojo,Verde, Azul){
		return "#" + this.Hexadecimal(Rojo) + this.Hexadecimal(Verde) + this.Hexadecimal(Azul);
	}

	/**
	 * Convierte un número en hexadecimal
	 * @param {int} Numero - Número a convertir
	 * @returns {string} - Número en hexadecimal
	 */
	Hexadecimal(Numero){
		if (isNaN(Numero)) return "00";
		return "0123456789ABCDEF".charAt((Numero-Numero%16)/16)+"0123456789ABCDEF".charAt(Numero%16);
	}

	/**
	 * Retorna un color al azar en formato hexadecimal
	 * @returns {string}
	 */
	ColorAzar(){
		let Rojo = Math.round(Math.random() * 255);
		let Verde = Math.round(Math.random() * 255);
		let Azul = Math.round(Math.random() * 255);
		return this.ColorRGB(Rojo, Verde, Azul);
	}
}


/** Clase para mantener un conjunto de puntos
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (noviembre de 2022)
 * */
class Punto {
	/**
	 * Constructor
	 * @param {int} posX - Valor X de la coordenada
	 * @param {int} posY - Valor Y de la coordenada
	 */
	constructor(posX, posY){
		this.posX = posX;
		this.posY = posY;
	}
}

/** Clase para mantener un conjunto de líneas
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (noviembre de 2022)
 * */
class Linea {
	/**
	 * Constructor
	 * @param {int} posXini - Valor X de la coordenada de inicio
	 * @param {int} posYini - Valor Y de la coordenada de inicio
	 * @param {int} posXfin - Valor X de la coordenada final
	 * @param {int} posYfin - Valor Y de la coordenada final
	 * @param {int} Grosor - Grosor de la línea
	 * @param {CanvasRenderingContext2D} Color - Color expresado en hexadecimal de la línea
	 */
	constructor(posXini, posYini, posXfin, posYfin, Grosor, Color){
		this.posXini = posXini;
		this.posYini = posYini;
		this.posXfin = posXfin;
		this.posYfin = posYfin;
		this.Grosor = Grosor;
		this.Color = Color;
	}

	/**
	 * Trasladar una línea
	 * @param {int} mueveX - Traslado en el eje X
	 * @param {int} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posXini += mueveX;
		this.posYini += mueveY;
		this.posXfin += mueveX;
		this.posYfin += mueveY;		
	}

	/**
	 * Girar la línea calculando su centroide
	 * @param {int} angulo - Ángulo en grados de giro
	 */
	Girar(angulo){
		let anguloR = angulo * Math.PI / 180;
		
		//Giro de las dos coordenadas
		let posXinig = Math.round(this.posXini * Math.cos(anguloR) - this.posYini * Math.sin(anguloR));
		let posYinig = Math.round(this.posXini * Math.sin(anguloR) + this.posYini * Math.cos(anguloR));
		let posXfing = Math.round(this.posXfin * Math.cos(anguloR) - this.posYfin * Math.sin(anguloR));
		let posYfing = Math.round(this.posXfin * Math.sin(anguloR) + this.posYfin * Math.cos(anguloR));
		
		//Giro del centroide
		let centroX = (this.posXini + this.posXfin) / 2;
		let centroY = (this.posYini + this.posYfin) / 2;
		let centroXg = Math.round(centroX * Math.cos(anguloR) - centroY * Math.sin(anguloR));
		let centroYg = Math.round(centroX * Math.sin(anguloR) + centroY * Math.cos(anguloR));
		
		//¿Cuánto se desplazó el centroide?
        let desplazaX = centroXg - centroX;
        let desplazaY = centroYg - centroY;

		//Retira el desplazamiento
		this.posXini = posXinig - desplazaX;
		this.posYini = posYinig - desplazaY;
		this.posXfin = posXfing - desplazaX;
		this.posYfin = posYfing - desplazaY;	
	}
}

/** Clase para mantener un conjunto de triángulos
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (noviembre de 2022)
 * */
class Triangulo {
	/**
	 * Constructor
	 * @param {int} posX1 - Valor X de la primera coordenada
	 * @param {int} posY1 - Valor Y de la primera coordenada
	 * @param {int} posX2 - Valor X de la segunda coordenada
	 * @param {int} posY2 - Valor Y de la segunda coordenada
	 * @param {int} posX3 - Valor X de la tercera coordenada
	 * @param {int} posY3 - Valor Y de la tercera coordenada
	 * @param {int} Tipo - Tipo triángulo: 1. Sólo perímetro, 2. Relleno, 3. Perímetro de un color y relleno de otro color
	 * @param {int} GrosorBorde - Grosor del borde
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal del borde
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal del relleno
	 */
	constructor(posX1, posY1, posX2, posY2, posX3, posY3, Tipo, GrosorBorde, ColorBorde, ColorRelleno){
		this.posX1 = posX1;
		this.posY1 = posY1;
		this.posX2 = posX2;
		this.posY2 = posY2;
		this.posX3 = posX3;
		this.posY3 = posY3;
		this.Tipo = Tipo; //1. Solo borde, 2. Sólo relleno, 3. Borde y relleno
		this.GrosorBorde = GrosorBorde;
		this.ColorBorde = ColorBorde;
		this.ColorRelleno = ColorRelleno;
	}

	/**
	 * Trasladar un triángulo
	 * @param {int} mueveX - Traslado en el eje X
	 * @param {int} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posX1 += mueveX;
		this.posY1 += mueveY;
		this.posX2 += mueveX;
		this.posY2 += mueveY;
		this.posX3 += mueveX;
		this.posY3 += mueveY;		
	}

	/**
	 * Girar el triángulo calculando su centroide
	 * @param {int} angulo - Ángulo en grados de giro
	 */
	Girar(angulo){
		let anguloR = angulo * Math.PI / 180;
		
		//Giro de las tres coordenadas
		let posX1g = Math.round(this.posX1 * Math.cos(anguloR) - this.posY1 * Math.sin(anguloR));
		let posY1g = Math.round(this.posX1 * Math.sin(anguloR) + this.posY1 * Math.cos(anguloR));
		let posX2g = Math.round(this.posX2 * Math.cos(anguloR) - this.posY2 * Math.sin(anguloR));
		let posY2g = Math.round(this.posX2 * Math.sin(anguloR) + this.posY2 * Math.cos(anguloR));
		let posX3g = Math.round(this.posX3 * Math.cos(anguloR) - this.posY3 * Math.sin(anguloR));
		let posY3g = Math.round(this.posX3 * Math.sin(anguloR) + this.posY3 * Math.cos(anguloR));
		
		//Giro del centroide
		let centroX = (this.posX1 + this.posX2 + this.posX3) / 3;
		let centroY = (this.posY1 + this.posY2 + this.posY3) / 3;
		let centroXg = Math.round(centroX * Math.cos(anguloR) - centroY * Math.sin(anguloR));
		let centroYg = Math.round(centroX * Math.sin(anguloR) + centroY * Math.cos(anguloR));
		
		//¿Cuánto se desplazó el centroide?
        let desplazaX = centroXg - centroX;
        let desplazaY = centroYg - centroY;

		//Retira el desplazamiento
		this.posX1 = posX1g - desplazaX;
		this.posY1 = posY1g - desplazaY;
		this.posX2 = posX2g - desplazaX;
		this.posY2 = posY2g - desplazaY;
		this.posX3 = posX3g - desplazaX;
		this.posY3 = posY3g - desplazaY;		
	}	
}

/** Clase para mantener un conjunto de rectángulos
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (noviembre de 2022)
 * */
class Rectangulo {
	/**
	 * Constructor
	 * @param {int} posX - Valor X de la coordenada superior izquierda
	 * @param {int} posY - Valor Y de la coordenada superior izquierda
	 * @param {int} Ancho - Ancho del rectángulo
	 * @param {int} Alto - Alto del rectángulo
	 * @param {int} Tipo - Tipo rectángulo: 1. Sólo perímetro, 2. Relleno, 3. Perímetro de un color y relleno de otro color
	 * @param {int} GrosorBorde - Grosor línea del borde
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal del borde
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal del relleno
	 */
	constructor(posX, posY, Ancho, Alto, Tipo, GrosorBorde, ColorBorde, ColorRelleno){
		this.posX = posX;
		this.posY = posY;
		this.Ancho = Ancho;
		this.Alto = Alto;
		this.Tipo = Tipo; //1. Solo borde, 2. Sólo relleno, 3. Borde y relleno
		this.GrosorBorde = GrosorBorde;
		this.ColorBorde = ColorBorde;
		this.ColorRelleno = ColorRelleno;
	}

	/**
	 * Trasladar un rectángulo
	 * @param {int} mueveX - Traslado en el eje X
	 * @param {int} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posX += mueveX;
		this.posY += mueveY;
	}	
}

/** Clase para mantener un conjunto de polígonos de 4 lados
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (noviembre de 2022)
 * */
class Poligono4Lados {
	/**
	 * Constructor
	 * @param {int} posX1 - Valor X de la primera coordenada
	 * @param {int} posY1 - Valor Y de la primera coordenada
	 * @param {int} posX2 - Valor X de la segunda coordenada
	 * @param {int} posY2 - Valor Y de la segunda coordenada
	 * @param {int} posX3 - Valor X de la tercera coordenada
	 * @param {int} posY3 - Valor Y de la tercera coordenada
	 * @param {int} posX4 - Valor X de la cuarta coordenada
	 * @param {int} posY4 - Valor Y de la cuarta coordenada
	 * @param {int} Tipo - Tipo polígono de 4 lados: 1. Sólo perímetro, 2. Relleno, 3. Perímetro de un color y relleno de otro color
	 * @param {int} GrosorBorde  - Grosor línea del borde
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal del borde
	 * @param {CanvasRenderingContext2D} ColorRelleno  - Color expresado en hexadecimal del relleno
	 */
	constructor(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, Tipo, GrosorBorde, ColorBorde, ColorRelleno){
		this.posX1 = posX1;
		this.posY1 = posY1;
		this.posX2 = posX2;
		this.posY2 = posY2;
		this.posX3 = posX3;
		this.posY3 = posY3;
		this.posX4 = posX4;
		this.posY4 = posY4;
		this.Tipo = Tipo; //1. Solo borde, 2. Sólo relleno, 3. Borde y relleno
		this.GrosorBorde = GrosorBorde;
		this.ColorBorde = ColorBorde;
		this.ColorRelleno = ColorRelleno;
	}

	/**
	 * Trasladar un polígono de 4 lados
	 * @param {int} mueveX - Traslado en el eje X
	 * @param {int} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posX1 += mueveX;
		this.posY1 += mueveY;
		this.posX2 += mueveX;
		this.posY2 += mueveY;
		this.posX3 += mueveX;
		this.posY3 += mueveY;
		this.posX4 += mueveX;
		this.posY4 += mueveY;		
	}

	/**
	 * Girar el polígono de 4 lados calculando su centroide
	 * @param {int} angulo - Ángulo en grados de giro
	 */
	Girar(angulo){
		let anguloR = angulo * Math.PI / 180;
		
		//Giro de las cuatro coordenadas
		let posX1g = Math.round(this.posX1 * Math.cos(anguloR) - this.posY1 * Math.sin(anguloR));
		let posY1g = Math.round(this.posX1 * Math.sin(anguloR) + this.posY1 * Math.cos(anguloR));
		let posX2g = Math.round(this.posX2 * Math.cos(anguloR) - this.posY2 * Math.sin(anguloR));
		let posY2g = Math.round(this.posX2 * Math.sin(anguloR) + this.posY2 * Math.cos(anguloR));
		let posX3g = Math.round(this.posX3 * Math.cos(anguloR) - this.posY3 * Math.sin(anguloR));
		let posY3g = Math.round(this.posX3 * Math.sin(anguloR) + this.posY3 * Math.cos(anguloR));
		let posX4g = Math.round(this.posX4 * Math.cos(anguloR) - this.posY4 * Math.sin(anguloR));
		let posY4g = Math.round(this.posX4 * Math.sin(anguloR) + this.posY4 * Math.cos(anguloR));
		
		//Giro del centroide
		let centroX = (this.posX1 + this.posX2 + this.posX3 + this.posX4) / 4;
		let centroY = (this.posY1 + this.posY2 + this.posY3 + this.posY4) / 4;
		let centroXg = Math.round(centroX * Math.cos(anguloR) - centroY * Math.sin(anguloR));
		let centroYg = Math.round(centroX * Math.sin(anguloR) + centroY * Math.cos(anguloR));
		
		//¿Cuánto se desplazó el centroide?
        let desplazaX = centroXg - centroX;
        let desplazaY = centroYg - centroY;

		//Retira el desplazamiento
		this.posX1 = posX1g - desplazaX;
		this.posY1 = posY1g - desplazaY;
		this.posX2 = posX2g - desplazaX;
		this.posY2 = posY2g - desplazaY;
		this.posX3 = posX3g - desplazaX;
		this.posY3 = posY3g - desplazaY;
		this.posX4 = posX4g - desplazaX;
		this.posY4 = posY4g - desplazaY;		
	}	
}

/** Clase para mantener un conjunto de elipses
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (noviembre de 2022)
 * */
class Elipse {
	/**
	 * Constructor
	 * @param {int} posX - Posición X de la coordenada del centro de la elipse
	 * @param {int} posY - Posición Y de la coordenada del centro de la elipse
	 * @param {int} RadioX - Longitud del radio en el eje X
	 * @param {int} RadioY - Longitud del radio en el eje Y
	 * @param {int} RotaFigura - Giro de la elipse
	 * @param {int} angIni - Ángulo inicial de dibujado de la elipse
	 * @param {int} angFin - Ángulo final de dibujado de la elipse
	 * @param {bool} ContraReloj - Si el dibujado es contrareloj es true
	 * @param {int} Tipo - Tipo elipse: 1. Sólo el borde, 2. Relleno, 3. Borde de un color y relleno de otro color
	 * @param {int} GrosorBorde - Grosor del borde
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal del borde
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal del relleno
	 */
	constructor(posX, posY, RadioX, RadioY, RotaFigura, angIni, angFin, ContraReloj, Tipo, GrosorBorde, ColorBorde, ColorRelleno){
		this.posX = posX;
		this.posY = posY;
		this.RadioX = RadioX;
		this.RadioY = RadioY;
		this.RotaFigura = RotaFigura;
		this.angIni = angIni;
		this.angFin = angFin;
		this.Reloj = ContraReloj;
		this.Tipo = Tipo; //1. Solo borde, 2. Sólo relleno, 3. Borde y relleno
		this.GrosorBorde = GrosorBorde;
		this.ColorBorde = ColorBorde;
		this.ColorRelleno = ColorRelleno;
	}

	/**
	 * Trasladar una elipse
	 * @param {int} mueveX - Traslado en el eje X
	 * @param {int} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posX += mueveX;
		this.posY += mueveY;
	}	
}

/** Clase para mantener un conjunto de círculos
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (noviembre de 2022)
 * */
class Circulo {
	/**
	 * Constructor
	 * @param {int} posX - Posición X de la coordenada del centro del círculo
	 * @param {int} posY - Posición Y de la coordenada del centro del círculo
	 * @param {int} Radio - Radio del círculo
	 * @param {int} Tipo - Tipo de círculo: 1. Sólo color en el perímetro, 2. Relleno, 3. Relleno de un color y perímetro de otro color
	 * @param {int} GrosorBorde - Grosor del perímetro
	 * @param {CanvasRenderingContext2D} ColorBorde - Color expresado en hexadecimal del borde
	 * @param {CanvasRenderingContext2D} ColorRelleno - Color expresado en hexadecimal del relleno
	 */
	constructor(posX, posY, Radio, Tipo, GrosorBorde, ColorBorde, ColorRelleno){
		this.posX = posX;
		this.posY = posY;
		this.Radio = Radio;
		this.Tipo = Tipo; //1. Solo borde, 2. Sólo relleno, 3. Borde y relleno
		this.GrosorBorde = GrosorBorde;
		this.ColorBorde = ColorBorde;
		this.ColorRelleno = ColorRelleno;
	}

	/**
	 * Trasladar un círculo
	 * @param {int} mueveX - Traslado en el eje X
	 * @param {int} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posX += mueveX;
		this.posY += mueveY;
	}	
}

/** Clase para almacenar las piezas generadas por el evaluador de expresiones
 * @Author Rafael Alberto Moreno Parra
 * @Version 4.0 (noviembre de 2022)
 */
class PiezaEvl4 {
    constructor(PosResultado, Funcion, PosValorA, Operador, PosValorB) {
        this.PosResultado = PosResultado; /* Posición donde se almacena el valor que genera la pieza al evaluarse */
        this.Funcion = Funcion; /* Código de la función 0:seno, 1:coseno, 2:tangente, 3: valor absoluto, 4: arcoseno, 5: arcocoseno, 6: arcotangente, 7: logaritmo natural, 8: valor tope, 9: exponencial, 10: raíz cuadrada */
        this.PosValorA = PosValorA; /* Posición donde se almacena la primera parte de la pieza */
        this.Operador = Operador; /* 0 es suma, 1 es resta, 2 es multiplicación, 3 es división, 4 es potencia */
        this.PosValorB = PosValorB; /* Posición donde se almacena la segunda parte de la pieza */
    }
}

/** Clase para almacenar las partes (al dividir la expresión algebraica entre operadores, números, funciones, paréntesis) por el evaluador de expresiones
 * @Author Rafael Alberto Moreno Parra
 * @Version 4.0 (noviembre de 2022)
 */
class ParteEvl4 {
    constructor(TipoParte, Valor) {
        /* Constantes de los diferentes tipos de datos que tendrán las piezas */
        this.ESFUNCION = 1;
        this.ESOPERADOR = 4;
        this.ESNUMERO = 5;
        this.ESVARIABLE = 6;

        this.Funcion = -1; /* Código de la función 0:seno, 1:coseno, 2:tangente, 3: valor absoluto, 4: arcoseno, 5: arcocoseno, 6: arcotangente, 7: logaritmo natural, 8: valor tope, 9: exponencial, 10: raíz cuadrada */
        this.Operador = -1; /* + suma - resta * multiplicación / división ^ potencia */
        this.posNumero = -1; /* Posición en lista de valores del número literal, por ejemplo: 3.141592 */
        this.posVariable = -1; /* Posición en lista de valores del valor de la variable algebraica */
        this.posAcumula = -1; /* Posición en lista de valores del valor de la pieza. Por ejemplo:
				3 + 2 / 5  se convierte así:
				|3| |+| |2| |/| |5|
    			|3| |+| |A|  A es un identificador de acumulador */

        this.Tipo = TipoParte; /* Acumulador, función, paréntesis que abre, paréntesis que cierra, operador, número, variable */
        switch (TipoParte) {
            case this.ESFUNCION:
                this.Funcion = Valor;
                break;
            case this.ESOPERADOR:
                this.Operador = Valor;
                break;
            case this.ESNUMERO:
                this.posNumero = Valor;
                break;
            case this.ESVARIABLE:
                this.posVariable = Valor;
                break;
        }

    }
}

/** Evaluador de expresiones 4.0
 * @Author Rafael Alberto Moreno Parra
 * @Version 4.0 (noviembre de 2022)
 *
 * Un evaluador de expresiones algebraicas es un algoritmo que toma una expresión algebraica almacenada en una cadena o string y es capaz de interpretarla.
 * Cadena: “3*4+1”  Resultado: 13
 * Hay que considerar que las expresiones algebraicas pueden tener:
 * 1. Números reales
 * 2. Variables (de la a .. z)
 * 3. Operadores (suma, resta, multiplicación, división, potencia)
 * 4. Uso de paréntesis
 * 5. Uso de funciones (seno, coseno, tangente, valor absoluto, arcoseno, arcocoseno, arcotangente, logaritmo natural, valor techo, exponencial, raíz cuadrada).
 */
class Evaluador4{

    constructor(){
        /* Constantes de los diferentes tipos de datos que tendrán las partes */
        this.ESFUNCION = 1;
        this.ESPARABRE = 2;
        this.ESPARCIERRA = 3;
        this.ESOPERADOR = 4;
        this.ESNUMERO = 5;
        this.ESVARIABLE = 6;
        this.ESACUMULA = 7;

        /* Donde guarda los valores de variables, constantes y piezas */
        this.Valores = [];
        for (let cont=0; cont<=25; cont++) this.Valores.push(0);

        /* Listado de partes en que se divide la expresión
           Toma una expresión, por ejemplo: 1.68 + sen( 3 / x ) * ( 2.9 ^ 2 - 9 ) y la divide en partes así:
           [1.68] [+] [sen(] [3] [/] [x] [)] [*] [(] [2.9] [^] [2] [-] [9] [)]
           Cada parte puede tener un número, un operador, una función, un paréntesis que abre o un paréntesis que cierra */
        this.Partes = [];

        /* Listado de piezas que ejecutan
            Toma las partes y las divide en piezas con la siguiente estructura:
            acumula = funcion  numero/variable/acumula  operador  numero/variable/acumula
            Siguiendo el ejemplo anterior sería:
            A =  2.9  ^  2
            B =  A  -  9
            C =  seno ( 3  /  x )
            D =  C  *  B
            E =  1.68 + D

           Esas piezas se evalúan de arriba a abajo y así se interpreta la ecuación */
        this.Piezas = [];

        /* Mensajes de error de sintaxis */
        this.ErrorSintaxis = [
            '0. Caracteres no permitidos. Ejemplo: 3$5+2',
            '1. Un número seguido de una letra. Ejemplo: 2q-(*3)',
            '2. Un número seguido de un paréntesis que abre. Ejemplo: 7-2(5-6)',
            '3. Doble punto seguido. Ejemplo: 3..1',
            '4. Punto seguido de operador. Ejemplo: 3.*1',
            '5. Un punto y sigue una letra. Ejemplo: 3+5.w-8',
            '6. Punto seguido de paréntesis que abre. Ejemplo: 2-5.(4+1)*3',
            '7. Punto seguido de paréntesis que cierra. Ejemplo: 2-(5.)*3',
            '8. Un operador seguido de un punto. Ejemplo: 2-(4+.1)-7',
            '9. Dos operadores estén seguidos. Ejemplo: 2++4, 5-*3',
            '10. Un operador seguido de un paréntesis que cierra. Ejemplo: 2-(4+)-7',
            '11. Una letra seguida de número. Ejemplo: 7-2a-6',
            '12. Una letra seguida de punto. Ejemplo: 7-a.-6',
            '13. Un paréntesis que abre seguido de punto. Ejemplo: 7-(.4-6)',
            '14. Un paréntesis que abre seguido de un operador. Ejemplo: 2-(*3)',
            '15. Un paréntesis que abre seguido de un paréntesis que cierra. Ejemplo: 7-()-6',
            '16. Un paréntesis que cierra y sigue un número. Ejemplo: (3-5)7',
            '17. Un paréntesis que cierra y sigue un punto. Ejemplo: (3-5).',
            '18. Un paréntesis que cierra y sigue una letra. Ejemplo: (3-5)t',
            '19. Un paréntesis que cierra y sigue un paréntesis que abre. Ejemplo: (3-5)(4*5)',
            '20. Hay dos o más letras seguidas (obviando las funciones)',
            '21. Los paréntesis están desbalanceados. Ejemplo: 3-(2*4))',
            '22. Doble punto en un número de tipo real. Ejemplo: 7-6.46.1+2',
            '23. Paréntesis que abre no corresponde con el que cierra. Ejemplo: 2+3)-2*(4',
            '24. Inicia con operador. Ejemplo: +3*5',
            '25. Finaliza con operador. Ejemplo: 3*5*',
            '26. Letra seguida de paréntesis que abre (obviando las funciones). Ejemplo: 4*a(6-2)*',
        ];
    }

	/**
	 * Toma la expresión algebraica y la analiza para su posterior evaluación
	 * @param {string} ExpresionOriginal - La expresión algebraica
	 * @returns {int} - Si retorna -1 es que la expresión es sintácticamente correcta y no hubo problemas para analizarla, en caso contrario hay que tomar ese valor devuelto (la expresión no es válida)
	 */
    Analizar(ExpresionOriginal) {
        this.Partes.length = 0;
        this.Piezas.length = 0;

        /* Chequea que la expresión sea sintácticamente correcta */
        let Sintaxis = this.EvaluaSintaxis(ExpresionOriginal);
        if (Sintaxis === -1) {
            /* Si es correcta, entonces se transforma, se divide en partes y luego en piezas */

            /* Primero a minúsculas y encerrado entre paréntesis */
            let Transformada = "(" + ExpresionOriginal.toLowerCase() + ")";

            /* Reemplaza las funciones de tres letras por una letra mayúscula. Cambia los )) por )+0) porque es requerido al crear las piezas */
            Transformada = Transformada.replaceAll(" ", "").replaceAll("sen", "A").replaceAll("cos", "B").replaceAll("tan", "C").replaceAll("abs", "D").replaceAll("asn", "E").replaceAll("acs", "F").replaceAll("atn", "G").replaceAll("log", "H").replaceAll("cei", "I").replaceAll("exp", "J").replaceAll("sqr", "K").replaceAll("))", ")+0)");

            this.#CrearPartes(Transformada);
            this.#CrearPiezas();
        }
        return Sintaxis;
    }

	/**
	 * Si Analizar retorna un valor distinto a -1, entonces esta función toma ese valor y muestra que error de sintaxis tiene la expresión algebraica
	 * @param {int} CodigoError - Código de error devuelto por Analizar() si es diferente de -1
	 * @returns {string} - Error sintáctico detectado
	 */
    MensajeError(CodigoError) {
        return this.ErrorSintaxis[CodigoError];
    }

	/**
	 * Da valor a las variables que tendrá la expresión algebraica
	 * @param {char} varAlgebra - Variable a la que se le va a dar un valor, de la 'a' a la 'z'
	 * @param {double} Valor - Valor que tendrá esa variables
	 * @constructor
	 */
    DarValorVariable(varAlgebra, Valor) {
        this.Valores[varAlgebra.charCodeAt(0) - 'a'.charCodeAt(0)] = Valor;
    }

	/**
	 * Evalúa la expresión convertida en piezas
	 * @returns {number} - Retorna el valor que genera la expresión algebraica
	 */
    Evaluar() {
        let Resultado = 0;

        /* Va de pieza en pieza */
		let TotalPiezas = this.Piezas.length;
        for (let Posicion = 0; Posicion < TotalPiezas; Posicion++) {
            let tmpPieza = this.Piezas[Posicion];

            switch (tmpPieza.Operador) {
                case 0: Resultado = this.Valores[tmpPieza.PosValorA] + this.Valores[tmpPieza.PosValorB]; break;
                case 1: Resultado = this.Valores[tmpPieza.PosValorA] - this.Valores[tmpPieza.PosValorB]; break;
                case 2: Resultado = this.Valores[tmpPieza.PosValorA] * this.Valores[tmpPieza.PosValorB]; break;
                case 3: Resultado = this.Valores[tmpPieza.PosValorA] / this.Valores[tmpPieza.PosValorB]; break;
                default: Resultado = Math.pow(this.Valores[tmpPieza.PosValorA], this.Valores[tmpPieza.PosValorB]); break;
            }
			
            switch (tmpPieza.Funcion) {
                case 0: Resultado = Math.sin(Resultado); break;
                case 1: Resultado = Math.cos(Resultado); break;
                case 2: Resultado = Math.tan(Resultado); break;
                case 3: Resultado = Math.abs(Resultado); break;
                case 4: Resultado = Math.asin(Resultado); break;
                case 5: Resultado = Math.acos(Resultado); break;
                case 6: Resultado = Math.atan(Resultado); break;
                case 7: Resultado = Math.log(Resultado); break;
                case 8: Resultado = Math.ceil(Resultado); break;
                case 9: Resultado = Math.exp(Resultado); break;
                case 10: Resultado = Math.sqrt(Resultado); break;
            }

            this.Valores[tmpPieza.PosResultado] = Resultado;
        }
        return Resultado;
    }

    /* Divide la expresión en partes */
    #CrearPartes(Expresion) {
        /* Va de caracter en caracter */
        let Numero = "";
        for (let Posicion = 0; Posicion < Expresion.length; Posicion++) {
            let Letra = Expresion[Posicion];

            /* Si es un número lo va acumulando en una cadena */
            if ((Letra >= '0' && Letra <= '9') || Letra === '.') {
                Numero += Letra;
            }
            /* Si es un operador entonces agrega número (si existía) */
            else if (Letra === '+' || Letra === '-' || Letra === '*' || Letra === '/' || Letra === '^') {
                if (Numero.length > 0) {
                    this.Valores.push(parseFloat(Numero));
                    this.Partes.push(new ParteEvl4(this.ESNUMERO, this.Valores.length - 1));
                    Numero = "";
                }
                switch (Letra) {
                    case '+': this.Partes.push(new ParteEvl4(this.ESOPERADOR, 0)); break;
                    case '-': this.Partes.push(new ParteEvl4(this.ESOPERADOR, 1)); break;
                    case '*': this.Partes.push(new ParteEvl4(this.ESOPERADOR, 2)); break;
                    case '/': this.Partes.push(new ParteEvl4(this.ESOPERADOR, 3)); break;
                    case '^': this.Partes.push(new ParteEvl4(this.ESOPERADOR, 4)); break;
                }
            }
            /* Si es variable */
            else if (Letra >= 'a' && Letra <= 'z') {
                this.Partes.push(new ParteEvl4(this.ESVARIABLE, Letra.charCodeAt(0) - 'a'.charCodeAt(0)));
            }
            /* Si es una función (seno, coseno, tangente, ...) */
            else if (Letra >= 'A' && Letra <= 'L') {
                this.Partes.push(new ParteEvl4(this.ESFUNCION, Letra.charCodeAt(0) - 'A'.charCodeAt(0)));
                Posicion++;
            }
            /* Si es un paréntesis que abre */
            else if (Letra === '(') {
                this.Partes.push(new ParteEvl4(this.ESPARABRE, 0));
            }
            /* Si es un paréntesis que cierra */
            else {
                if (Numero.length > 0) {
                    this.Valores.push(parseFloat(Numero));
                    this.Partes.push(new ParteEvl4(this.ESNUMERO, this.Valores.length - 1));
                    Numero = "";
                }
                /* Si sólo había un número o variable dentro del paréntesis le agrega + 0 (por ejemplo:  sen(x) o 3*(2) ) */
                if (this.Partes[this.Partes.length - 2].Tipo === this.ESPARABRE || this.Partes[this.Partes.length - 2].Tipo === this.ESFUNCION) {
                    this.Partes.push(new ParteEvl4(this.ESOPERADOR, 0));
                    this.Valores.push(0);
                    this.Partes.push(new ParteEvl4(this.ESNUMERO, this.Valores.length - 1));
                }
                this.Partes.push(new ParteEvl4(this.ESPARCIERRA, 0));
            }
        }
    }

    /* Convierte las partes en las piezas finales de ejecución */
    #CrearPiezas() {
        let Contador = this.Partes.length - 1;
        do {
            let tmpParte = this.Partes[Contador];
            if (tmpParte.Tipo === this.ESPARABRE || tmpParte.Tipo === this.ESFUNCION) {
                this.#GenerarPiezasOperador(4, 4, Contador);  /* Evalúa las potencias */
                this.#GenerarPiezasOperador(2, 3, Contador);  /* Luego evalúa multiplicar y dividir */
                this.#GenerarPiezasOperador(0, 1, Contador);  /* Finalmente evalúa sumar y restar */

                if (tmpParte.Tipo === this.ESFUNCION) { /* Agrega la función a la última pieza */
                    this.Piezas[this.Piezas.length-1].Funcion = tmpParte.Funcion;
                }

                /* Quita el paréntesis/función que abre y el que cierra, dejando el centro */
                this.Partes.splice(Contador, 1);
                this.Partes.splice(Contador + 1, 1);
            }
            Contador--;
        } while (Contador >= 0);
    }

    /* Genera las piezas buscando determinado operador */
    #GenerarPiezasOperador(OperA, OperB, Inicia) {
        let Contador = Inicia + 1;
        do {
            let tmpParte = this.Partes[Contador];
            if (tmpParte.Tipo === this.ESOPERADOR && (tmpParte.Operador === OperA || tmpParte.Operador === OperB)) {
                let tmpParteIzq = this.Partes[Contador - 1];
                let tmpParteDer = this.Partes[Contador + 1];

                let PosValorA = 0;
                switch (tmpParteIzq.Tipo) {
                    case this.ESNUMERO: PosValorA = tmpParteIzq.posNumero; break;
                    case this.ESVARIABLE: PosValorA = tmpParteIzq.posVariable; break;
                    default: PosValorA = tmpParteIzq.posAcumula; break;
                }

                let PosValorB = 0;
                switch (tmpParteDer.Tipo) {
                    case this.ESNUMERO: PosValorB = tmpParteDer.posNumero; break;
                    case this.ESVARIABLE: PosValorB = tmpParteDer.posVariable; break;
                    default: PosValorB = tmpParteDer.posAcumula; break;
                }

                /* Añade a lista de piezas y crea una nueva posición en Valores */
                this.Valores.push(0);

                /* Crea la pieza */
                this.Piezas.push(new PiezaEvl4(this.Valores.length - 1, -1, PosValorA, tmpParte.Operador, PosValorB));

                /* Elimina la parte del operador y la siguiente */
                this.Partes.splice(Contador, 1);
                this.Partes.splice(Contador, 1);
                //this.ImprimePartes();

                /* Retorna el contador en uno para tomar la siguiente operación */
                Contador--;

                /* Cambia la parte anterior por parte que acumula */
                tmpParteIzq.Tipo = this.ESACUMULA;
                tmpParteIzq.posAcumula = this.Piezas[this.Piezas.length-1].PosResultado;
            }
            Contador++;
        } while (this.Partes[Contador].Tipo !== this.ESPARCIERRA);
    }

    EvaluaSintaxis(ExpresionOriginal) {
        /* Se examina en minúsculas */
        let Minusculas = ExpresionOriginal.toLowerCase();

        /* Reemplaza las funciones de tres letras por una letra */
        let Expresion = Minusculas.replaceAll(" ", "").replaceAll("sen(", "a+(").replaceAll("cos(", "a+(").replaceAll("tan(", "a+(").replaceAll("abs(","a+(").replaceAll("asn(", "a+(").replaceAll("acs(", "a+(").replaceAll("atn(", "a+(").replaceAll("log(", "a+(").replaceAll("cei(", "a+(").replaceAll("exp(", "a+(").replaceAll("sqr(", "a+(");

        if (!this.#BuenaSintaxis00(Expresion)) return 0;
        if (!this.#BuenaSintaxis01(Expresion)) return 1;
        if (!this.#BuenaSintaxis02(Expresion)) return 2;
        if (!this.#BuenaSintaxis03(Expresion)) return 3;
        if (!this.#BuenaSintaxis04(Expresion)) return 4;
        if (!this.#BuenaSintaxis05(Expresion)) return 5;
        if (!this.#BuenaSintaxis06(Expresion)) return 6;
        if (!this.#BuenaSintaxis07(Expresion)) return 7;
        if (!this.#BuenaSintaxis08(Expresion)) return 8;
        if (!this.#BuenaSintaxis09(Expresion)) return 9;
        if (!this.#BuenaSintaxis10(Expresion)) return 10;
        if (!this.#BuenaSintaxis11(Expresion)) return 11;
        if (!this.#BuenaSintaxis12(Expresion)) return 12;
        if (!this.#BuenaSintaxis13(Expresion)) return 13;
        if (!this.#BuenaSintaxis14(Expresion)) return 14;
        if (!this.#BuenaSintaxis15(Expresion)) return 15;
        if (!this.#BuenaSintaxis16(Expresion)) return 16;
        if (!this.#BuenaSintaxis17(Expresion)) return 17;
        if (!this.#BuenaSintaxis18(Expresion)) return 18;
        if (!this.#BuenaSintaxis19(Expresion)) return 19;
        if (!this.#BuenaSintaxis20(Expresion)) return 20;
        if (!this.#BuenaSintaxis21(Expresion)) return 21;
        if (!this.#BuenaSintaxis22(Expresion)) return 22;
        if (!this.#BuenaSintaxis23(Expresion)) return 23;
        if (!this.#BuenaSintaxis24(Expresion)) return 24;
        if (!this.#BuenaSintaxis25(Expresion)) return 25;
        if (!this.#BuenaSintaxis26(Expresion)) return 26;
        return -1;
    }

    /* Retorna si el Caracter es un operador matemático */
    #EsUnOperador(Caracter) {
        return Caracter === '+' || Caracter === '-' || Caracter === '*' || Caracter === '/' || Caracter === '^';
    }

    /* Retorna si el Caracter es un número */
    #EsNumero(Caracter) {
        return Caracter >= '0' && Caracter <= '9';
    }

    /* Retorna si el Caracter es una letra */
    #EsLetraMinuscula(Caracter) {
        return Caracter >= 'a' && Caracter <= 'z';
    }

    /* 0. Caracter no válido. Ejemplo: 2#4??1 */
    #BuenaSintaxis00(Expresion) {
        for (let Contador = 0; Contador < Expresion.length; Contador++)
            if (!this.#ChequeaPermitido(Expresion[Contador]))
                return false;
        return true;
    }

    /* Retorna true si el caracter es de los permitidos en una ecuación */
    #ChequeaPermitido(Caracter) {
        let Permitidos = "abcdefghijklmnopqrstuvwxyz0123456789.+-*/^()";
        for (let contador = 0; contador < Permitidos.length; contador++)
            if (Caracter === Permitidos[contador]) return true;
        return false;
    }

    /* 1. Un número seguido de una letra. Ejemplo: 2q-(*3) */
    #BuenaSintaxis01(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (this.#EsNumero(Expresion[Contador]) && this.#EsLetraMinuscula(Expresion[Contador + 1]))
                return false;
        return true;
    }

    /* 2. Un número seguido de un paréntesis que abre. Ejemplo: 7-2(5-6) */
    #BuenaSintaxis02(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (this.#EsNumero(Expresion[Contador]) && Expresion[Contador + 1] === '(')
                return false;
        return true;
    }

    /* 3. Doble punto seguido. Ejemplo: 3..1 */
    #BuenaSintaxis03(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === '.' && Expresion[Contador + 1] === '.')
                return false;
        return true;
    }

    /* 4. Punto seguido de operador. Ejemplo: 3.*1 */
    #BuenaSintaxis04(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === '.' && this.#EsUnOperador(Expresion[Contador+1]))
                return false;
        return true;
    }

    /* 5. Un punto y sigue una letra. Ejemplo: 3+5.w-8 */
    #BuenaSintaxis05(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === '.' && this.#EsLetraMinuscula(Expresion[Contador + 1]))
                return false;
        return true;
    }

    /* 6. Punto seguido de paréntesis que abre. Ejemplo: 2-5.(4+1)*3 */
    #BuenaSintaxis06(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === '.' && Expresion[Contador + 1] === '(')
                return false;
        return true;
    }

    /* 7. Punto seguido de paréntesis que cierra. Ejemplo: 2-(5.)*3 */
    #BuenaSintaxis07(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === '.' && Expresion[Contador + 1] === ')')
                return false;
        return true;
    }

    /* 8. Un operador seguido de un punto. Ejemplo: 2-(4+.1)-7 */
    #BuenaSintaxis08(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (this.#EsUnOperador(Expresion[Contador]) && Expresion[Contador + 1] === '.')
                return false;
        return true;
    }

    /* 9. Dos operadores estén seguidos. Ejemplo: 2++4, 5-*3 */
    #BuenaSintaxis09(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (this.#EsUnOperador(Expresion[Contador]) && this.#EsUnOperador(Expresion[Contador + 1]))
                return false;
        return true;
    }

    /* 10. Un operador seguido de un paréntesis que cierra. Ejemplo: 2-(4+)-7 */
    #BuenaSintaxis10(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (this.#EsUnOperador(Expresion[Contador]) && Expresion[Contador + 1] === ')')
                return false;
        return true;
    }

    /* 11. Una letra seguida de número. Ejemplo: 7-2a-6 */
    #BuenaSintaxis11(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (this.#EsLetraMinuscula(Expresion[Contador]) && this.#EsNumero(Expresion[Contador + 1]))
                return false;
        return true;
    }

    /* 12. Una letra seguida de punto. Ejemplo: 7-a.-6 */
    #BuenaSintaxis12(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (this.#EsLetraMinuscula(Expresion[Contador]) && Expresion[Contador + 1] === '.')
                return false;
        return true;
    }

    /* 13. Un paréntesis que abre seguido de punto. Ejemplo: 7-(.4-6) */
    #BuenaSintaxis13(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === '(' && Expresion[Contador + 1] === '.')
                return false;
        return true;
    }

    /* 14. Un paréntesis que abre seguido de un operador. Ejemplo: 2-(*3) */
    #BuenaSintaxis14(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === '(' && this.#EsUnOperador(Expresion[Contador + 1]))
                return false;
        return true;
    }

    /* 15. Un paréntesis que abre seguido de un paréntesis que cierra. Ejemplo: 7-()-6 */
    #BuenaSintaxis15(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === '(' && Expresion[Contador + 1] === ')')
                return false;
        return true;
    }

    /* 16. Un paréntesis que cierra y sigue un número. Ejemplo: (3-5)7 */
    #BuenaSintaxis16(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === ')' && this.#EsNumero(Expresion[Contador + 1]))
                return false;
        return true;
    }

    /* 17. Un paréntesis que cierra y sigue un punto. Ejemplo: (3-5). */
    #BuenaSintaxis17(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === ')' && Expresion[Contador + 1] === '.')
                return false;
        return true;
    }

    /* 18. Un paréntesis que cierra y sigue una letra. Ejemplo: (3-5)t */
    #BuenaSintaxis18(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === ')' && this.#EsLetraMinuscula(Expresion[Contador + 1]))
                return false;
        return true;
    }

    /* 19. Un paréntesis que cierra y sigue un paréntesis que abre. Ejemplo: (3-5)(4*5) */
    #BuenaSintaxis19(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (Expresion[Contador] === ')' && Expresion[Contador + 1] === '(')
                return false;
        return true;
    }

    /* 20. Si hay dos letras seguidas (después de quitar las funciones), es un error */
    #BuenaSintaxis20(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (this.#EsLetraMinuscula(Expresion[Contador]) && this.#EsLetraMinuscula(Expresion[Contador + 1]))
                return false;
        return true;
    }

    /* 21. Los paréntesis estén desbalanceados. Ejemplo: 3-(2*4)) */
    #BuenaSintaxis21(Expresion) {
        let ParentesisAbre = 0; /* Contador de paréntesis que abre */
        let ParentesisCierra = 0; /* Contador de paréntesis que cierra */
        for (let Contador = 0; Contador < Expresion.length; Contador++) {
            switch (Expresion[Contador]) {
                case '(': ParentesisAbre++; break;
                case ')': ParentesisCierra++; break;
            }
        }
        return ParentesisAbre === ParentesisCierra;
    }

    /* 22. Doble punto en un número de tipo real. Ejemplo: 7-6.46.1+2 */
    #BuenaSintaxis22(Expresion) {
        let TotalPuntos = 0; /* Validar los puntos decimales de un número real */
        for (let Contador = 0; Contador < Expresion.length; Contador++) {
            if (this.#EsUnOperador(Expresion[Contador])) TotalPuntos = 0;
            if (Expresion[Contador] === '.') TotalPuntos++;
            if (TotalPuntos > 1) return false;
        }
        return true;
    }

    /* 23. Paréntesis que abre no corresponde con el que cierra. Ejemplo: 2+3)-2*(4 */
    #BuenaSintaxis23(Expresion) {
        let ParentesisAbre = 0; /* Contador de paréntesis que abre */
        let ParentesisCierra = 0; /* Contador de paréntesis que cierra */
        for (let Contador = 0; Contador < Expresion.length; Contador++) {
            switch (Expresion[Contador]) {
                case '(': ParentesisAbre++; break;
                case ')': ParentesisCierra++; break;
            }
            if (ParentesisCierra > ParentesisAbre) return false;
        }
        return true;
    }

    /* 24. Inicia con operador. Ejemplo: +3*5 */
    #BuenaSintaxis24(Expresion) {
        return !this.#EsUnOperador(Expresion[0]);
    }

    /* 25. Finaliza con operador. Ejemplo: 3*5* */
    #BuenaSintaxis25(Expresion) {
        return !this.#EsUnOperador(Expresion[Expresion.length - 1]);
    }

    /* 26. Encuentra una letra seguida de paréntesis que abre. Ejemplo: 3-a(7)-5 */
    #BuenaSintaxis26(Expresion) {
        for (let Contador = 0; Contador < Expresion.length - 1; Contador++)
            if (this.#EsLetraMinuscula(Expresion[Contador]) && Expresion[Contador + 1] === '(')
                return false;
        return true;
    }
}

//Funciones genéricas
function AzarEnteroEntre(minimo, maximo){
	return Math.round(Math.random() * (maximo-minimo)) + minimo;
}

//https://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class
