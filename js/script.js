function getAge() {
   const input = document.querySelector("input").value;

    if(input <= 0) {
        alert("Sinceramente! Deixa de brincadeira e preenche isso direito!");
    } else if(input >= 1 && input <= 3) {
            document.getElementById("input").remove();
            const img = document.createElement("img");
            const div = document.querySelector("div");
            img.src = "../img/bebe_e_notebook.jpg";
            const p = document.createElement("p");
            const p_content = document.createTextNode("Você é um bebê muito esperto! Pode até saber lidar com tecnologias, mas ainda vai na sua velha amiga cadeirinha no banco de trás!")
            p.appendChild(p_content)
            div.appendChild(p);
            div.appendChild(img);
        } else if(input >= 4 && input <= 7) {

            document.getElementById("input").remove();
            const img = document.createElement("img");
            const div = document.querySelector("div");
            img.src = "../img/crianca_em_mini_carro.jpg";
            const p = document.createElement("p");
            const p_content = document.createTextNode("Olha só quem cresceu! Mas o máximo que você pode dirigir é um carrinho elétrico! Espere mais uns anos, e enquanto isso, vá no assento de elevação no banco traseiro.")
            p.appendChild(p_content)
            div.appendChild(p);
            div.appendChild(img);
        } else if (input >= 8 && input <= 17) {
            document.getElementById("input").remove();
            const div_question = document.createElement("div");
            div_question.id = "question";
            const button_yes = document.createElement("button");
            button_yes.textContent = "Sim!";
            const button_no = document.createElement("button");
            button_no.textContent = "Não...";
            const question = document.createElement("p");
            const question_content = document.createTextNode("Seus pais possuem carro?");
            question.appendChild(question_content);
            div_question.appendChild(question);
            div_question.appendChild(button_yes);
            div_question.appendChild(button_no);
            document.body.appendChild(div_question);

            button_yes.onclick = function() {
                    document.getElementById("question").remove();
                    const img = document.createElement("img");
                    const div = document.querySelector("div");
                    img.src = "../img/viagem_em_familia.jpg";
                    const p = document.createElement("p");
                    const p_content = document.createTextNode("Aproveite a viagem! E comece a se organizar para no futuro tirar sua carteira e você ser o condutor!")
                    p.appendChild(p_content)
                    div.appendChild(p);
                    div.appendChild(img);
            }

            button_no.onclick = function() {
                
                if(input >= 8 && input <= 12) {
                    document.getElementById("question").remove();
                    const img = document.createElement("img");
                    const div = document.querySelector("div");
                    img.src = "../img/mae_e_filha_no_onibus.jpg";
                    const p = document.createElement("p");
                    const p_content = document.createTextNode("Uma caminhada e um pouco de ar fresco nunca fizeram mal a ninguém! Vá andando até seu destino ou pegue um transporte público. Mas sempre vá com um adulto!")
                    p.appendChild(p_content)
                    div.appendChild(p);
                    div.appendChild(img);
                    
                } else {
                    document.getElementById("question").remove();
                    const img = document.createElement("img");
                    const div = document.querySelector("div");
                    img.src = "../img/adolescente_esperando_onibus.jpg";
                    const p = document.createElement("p");
                    const p_content = document.createTextNode("Vai de busão! E comece a se programar para tirar sua carteira, ou vai pegar busão pra sempre?")
                    p.appendChild(p_content)
                    div.appendChild(p);
                    div.appendChild(img);
                }
                
            }

        } else {
            document.getElementById("input").remove();
            const div_question = document.createElement("div");
            div_question.id = "question";
            const button_yes = document.createElement("button");
            button_yes.textContent = "Sim!";
            const button_no = document.createElement("button");
            button_no.textContent = "Não...";
            const question = document.createElement("p");
            const question_content = document.createTextNode("Você possui carteira de habilitação?");
            question.appendChild(question_content);
            div_question.appendChild(question);
            div_question.appendChild(button_yes);
            div_question.appendChild(button_no);
            document.body.appendChild(div_question);

            button_yes.onclick = function() {
                document.getElementById("question").remove();
                const div_question = document.createElement("div");
                div_question.id = "question";
                const button_yes = document.createElement("button");
                button_yes.textContent = "Sim!";
                const button_no = document.createElement("button");
                button_no.textContent = "Não...";
                const question = document.createElement("p");
                const question_content = document.createTextNode("E você ou seus pais possuem carro?");
                question.appendChild(question_content);
                div_question.appendChild(question);
                div_question.appendChild(button_yes);
                div_question.appendChild(button_no);
                document.body.appendChild(div_question);

                button_no.onclick = function() {
                    document.getElementById("question").remove();
                    const div_question = document.createElement("div");
                    div_question.id = "question";
                    const button_yes = document.createElement("button");
                    button_yes.textContent = "Sim!";
                    const button_no = document.createElement("button");
                    button_no.textContent = "Não...";
                    const question = document.createElement("p");
                    const question_content = document.createTextNode("Mas você pode pegar emprestado de alguém?");
                    question.appendChild(question_content);
                    div_question.appendChild(question);
                    div_question.appendChild(button_yes);
                    div_question.appendChild(button_no);
                    document.body.appendChild(div_question);

                    button_no.onclick = function() {
                        document.getElementById("question").remove();
                        const img = document.createElement("img");
                        const div = document.querySelector("div");
                        img.src = "../img/adultos_esperando_onibus.jpg";
                        const p = document.createElement("p");
                        const p_content = document.createTextNode("A gente nem sempre pode ter tudo. Mas a gente sempre pode ter o busão!")
                        p.appendChild(p_content)
                        div.appendChild(p);
                        div.appendChild(img);
                    }

                    button_yes.onclick = function() {
                        document.getElementById("question").remove();
                        const img = document.createElement("img");
                        const div = document.querySelector("div");
                        img.src = "../img/dirigir.jpg";
                        const p = document.createElement("p");
                        const p_content = document.createTextNode("Não importa de quem é o carro, o importante é chegar confortavelmente ao seu destino nele.")
                        p.appendChild(p_content)
                        div.appendChild(p);
                        div.appendChild(img);
                    }
                }

                button_yes.onclick = function() {
                    document.getElementById("question").remove();
                    const img = document.createElement("img");
                    const div = document.querySelector("div");
                    img.src = "../img/dirigir.jpg";
                    const p = document.createElement("p");
                    const p_content = document.createTextNode("Privilegiado é outra coisa! Aproveite o conforto da sua viagem de carro!")
                    p.appendChild(p_content)
                    div.appendChild(p);
                    div.appendChild(img);
                }
            }

            button_no.onclick = function() {
                document.getElementById("question").remove();
                const img = document.createElement("img");
                const div = document.querySelector("div");
                img.src = "../img/adultos_esperando_onibus.jpg";
                const p = document.createElement("p");
                const p_content = document.createTextNode("Eu disse pra se organizar e tirar a carteira. Agora você vai de busão!")
                p.appendChild(p_content)
                div.appendChild(p);
                div.appendChild(img);
            }
        }
    }
