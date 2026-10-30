/* Contenido del manual «Резонанс» de Роберт Фадер.
   Vocabulario: [ruso, género, en, es, pt]
   Frases:      [ruso, en, es, pt]
   Declinación: nouns[i] = [lema, nota, И, Р, Д, В, Т, П]
   Cloze:       [frase con ___, base, respuesta, [distractores], en, es, pt]           */

window.UNITS = [
{
  n: 1, img: 'img/units/u1.webp', ru: 'Знакомство и простые вопросы',
  t: { es: 'Presentaciones y preguntas simples', en: 'Introductions and simple questions', pt: 'Apresentações e perguntas simples' },
  topics: 'Знакомство и приветствия · «Как тебя зовут?» · Кто? Что? Кого? · «Ты» и «Вы»',
  vocab: [
    ['друг','м.','friend (male)','amigo','amigo'],
    ['подруга','ж.','friend (female)','amiga','amiga'],
    ['студент','м.','student (male)','estudiante (m.)','estudante (m.)'],
    ['студентка','ж.','student (female)','estudiante (f.)','estudante (f.)'],
    ['детектив','м.','detective','detective','detetive'],
    ['психолог','м.','psychologist','psicólogo','psicólogo'],
    ['имя','ср.','name','nombre','nome'],
    ['язык','м.','language','idioma','idioma'],
    ['страна','ж.','country','país','país'],
    ['город','м.','city','ciudad','cidade'],
    ['книга','ж.','book','libro','livro'],
    ['урок','м.','lesson','lección','lição']
  ],
  phrases: [
    ['Здравствуйте! Меня зовут Наташа.','Hello! My name is Natasha.','¡Hola! Me llamo Natasha.','Olá! Chamo-me Natasha.'],
    ['Кто это? — Это студент.','Who is this? — A student.','¿Quién es? — Un estudiante.','Quem é? — Um estudante.'],
    ['Я изучаю русский язык.','I am learning Russian.','Estudio ruso.','Estudo russo.']
  ],
  nouns: [
    ['друг','м. · 2-е скл.','друг','друга','другу','друга','другом','друге'],
    ['книга','ж. · 1-е скл.','книга','книги','книге','книгу','книгой','книге'],
    ['студент','м. · 2-е скл.','студент','студента','студенту','студента','студентом','студенте'],
    ['подруга','ж. · 1-е скл.','подруга','подруги','подруге','подругу','подругой','подруге']
  ],
  cases: [0,3],
  cloze: [
    ['Это ___.','друг','друг',['друга','другу','другом'],'This is a friend.','Es un amigo.','Isto é um amigo.'],
    ['Я вижу ___.','друг','друга',['друг','другу','другом'],'I see a friend.','Veo a un amigo.','Vejo um amigo.'],
    ['Я знаю ___.','Алиса','Алису',['Алиса','Алисы','Алисе'],'I know Alisa.','Conozco a Alisa.','Conheço a Alisa.'],
    ['___ зовут Луис.','я','Меня',['Я','Мне','Мной'],'My name is Luis.','Me llamo Luis.','Chamo-me Luís.'],
    ['Я вижу ___.','подруга','подругу',['подруга','подруги','подруге'],'I see a (female) friend.','Veo a una amiga.','Vejo uma amiga.']
  ],
  tips: {
    es: ['Para presentarte: «Меня зовут Луис» (literalmente «me llaman Luis»). Nunca «Я зовут».',
         '«Ты» es informal (amigos, niños); «Вы» es formal o plural: «Как Вас зовут?».',
         '«Кто?» pregunta por personas y «Что?» por cosas: «Кто это? — Это Алиса. Что это? — Это книга».',
         'Después de «вижу / знаю» el objeto va en acusativo: друг → друга, подруга → подругу, Алиса → Алису.'],
    en: ['To introduce yourself: «Меня зовут Луис» (literally “they call me Luis”). Never «Я зовут».',
         '«Ты» is informal (friends, children); «Вы» is polite or plural: «Как Вас зовут?».',
         '«Кто?» asks about people, «Что?» about things: «Кто это? — Это Алиса. Что это? — Это книга».',
         'After «вижу / знаю» the object is accusative: друг → друга, подруга → подругу, Алиса → Алису.'],
    pt: ['Para te apresentares: «Меня зовут Луис» (literalmente «chamam-me Luís»). Nunca «Я зовут».',
         '«Ты» é informal (amigos, crianças); «Вы» é formal ou plural: «Как Вас зовут?».',
         '«Кто?» pergunta por pessoas e «Что?» por coisas: «Кто это? — Это Алиса. Что это? — Это книга».',
         'Depois de «вижу / знаю» o objeto vai no acusativo: друг → друга, подруга → подругу, Алиса → Алису.']
  }
},
{
  n: 2, img: 'img/units/u2.webp', ru: 'Что у нас есть? Числа и предметы',
  t: { es: '¿Qué tenemos? Números y objetos', en: 'What do we have? Numbers and objects', pt: 'O que temos? Números e objetos' },
  topics: 'У меня есть… / у меня нет… · Родительный падеж · У кого? · Числа',
  vocab: [
    ['дом','м.','house','casa','casa'],
    ['кот','м.','cat (male)','gato','gato'],
    ['собака','ж.','dog','perro','cão'],
    ['окно','ср.','window','ventana','janela'],
    ['телефон','м.','phone','teléfono','telefone'],
    ['машина','ж.','car','coche','carro'],
    ['комната','ж.','room','habitación','quarto'],
    ['вода','ж.','water','agua','água'],
    ['деньги','мн.','money','dinero','dinheiro'],
    ['журнал','м.','magazine','revista','revista'],
    ['стул','м.','chair','silla','cadeira'],
    ['книга','ж.','book','libro','livro']
  ],
  phrases: [
    ['У меня есть кот.','I have a cat.','Tengo un gato.','Tenho um gato.'],
    ['У меня нет машины.','I do not have a car.','No tengo coche.','Não tenho carro.'],
    ['У меня две книги.','I have two books.','Tengo dos libros.','Tenho dois livros.']
  ],
  nouns: [
    ['дом','м. · 2-е скл.','дом','дома','дому','дом','домом','доме'],
    ['кот','м. · 2-е скл.','кот','кота','коту','кота','котом','коте'],
    ['собака','ж. · 1-е скл.','собака','собаки','собаке','собаку','собакой','собаке'],
    ['окно','ср. · 2-е скл.','окно','окна','окну','окно','окном','окне']
  ],
  cases: [0,1],
  cloze: [
    ['У меня нет ___.','машина','машины',['машина','машину','машине'],"I don't have a car.",'No tengo coche.','Não tenho carro.'],
    ['У ___ есть дом.','кот','кота',['кот','коту','котом'],'The cat has a house.','El gato tiene una casa.','O gato tem uma casa.'],
    ['У меня две ___.','книга','книги',['книга','книг','книгу'],'I have two books.','Tengo dos libros.','Tenho dois livros.'],
    ['У меня пять ___.','книга','книг',['книги','книга','книгой'],'I have five books.','Tengo cinco libros.','Tenho cinco livros.'],
    ['У меня есть ___.','собака','собака',['собаки','собаку','собаке'],'I have a dog.','Tengo un perro.','Tenho um cão.']
  ],
  tips: {
    es: ['«У меня есть + nominativo» = tengo: «У меня есть дом».',
         '«У меня нет + genitivo» = no tengo: «У меня нет дома», «нет воды», «нет денег».',
         'El poseedor va con «у + genitivo»: «У Наташи есть собака», «У Марка есть телефон».',
         'Números: 1 → nominativo (одна книга); 2–4 → genitivo singular (две книги); 5–20 → genitivo plural (пять книг). 11–14 siempre como 5.'],
    en: ['«У меня есть + nominative» = I have: «У меня есть дом».',
         '«У меня нет + genitive» = I don’t have: «У меня нет дома», «нет воды», «нет денег».',
         'The owner goes with «у + genitive»: «У Наташи есть собака», «У Марка есть телефон».',
         'Numbers: 1 → nominative (одна книга); 2–4 → genitive singular (две книги); 5–20 → genitive plural (пять книг). 11–14 always behave like 5.'],
    pt: ['«У меня есть + nominativo» = tenho: «У меня есть дом».',
         '«У меня нет + genitivo» = não tenho: «У меня нет дома», «нет воды», «нет денег».',
         'O possuidor vai com «у + genitivo»: «У Наташи есть собака», «У Марка есть телефон».',
         'Números: 1 → nominativo (одна книга); 2–4 → genitivo singular (две книги); 5–20 → genitivo plural (пять книг). 11–14 comportam-se sempre como 5.']
  }
},
{
  n: 3, img: 'img/units/u3.webp', ru: 'Каждый день и движение',
  t: { es: 'El día a día y el movimiento', en: 'Everyday life and movement', pt: 'O dia a dia e o movimento' },
  topics: 'Мой день · Идти и ехать · Куда? Откуда? · Просьбы и указания',
  vocab: [
    ['работа','ж.','work','trabajo','trabalho'],
    ['парк','м.','park','parque','parque'],
    ['автобус','м.','bus','autobús','autocarro'],
    ['море','ср.','sea','mar','mar'],
    ['магазин','м.','shop','tienda','loja'],
    ['школа','ж.','school','escuela','escola'],
    ['поезд','м.','train','tren','comboio'],
    ['офис','м.','office','oficina','escritório'],
    ['утро','ср.','morning','mañana (del día)','manhã'],
    ['вечер','м.','evening','tarde / noche','fim da tarde'],
    ['встреча','ж.','meeting','encuentro','encontro'],
    ['отпуск','м.','leave / holiday','vacaciones','férias']
  ],
  phrases: [
    ['Я иду на работу.','I am walking to work.','Voy al trabajo a pie.','Vou a pé para o trabalho.'],
    ['Я езжу в офис на автобусе.','I go to the office by bus.','Voy a la oficina en autobús.','Vou de autocarro para o escritório.'],
    ['Я иду из парка.','I am walking from the park.','Vengo del parque a pie.','Venho a pé do parque.']
  ],
  nouns: [
    ['работа','ж. · 1-е скл.','работа','работы','работе','работу','работой','работе'],
    ['парк','м. · 2-е скл.','парк','парка','парку','парк','парком','парке'],
    ['автобус','м. · 2-е скл.','автобус','автобуса','автобусу','автобус','автобусом','автобусе'],
    ['море','ср. · 2-е скл.','море','моря','морю','море','морем','море']
  ],
  cases: [3,1],
  cloze: [
    ['Я иду на ___.','работа','работу',['работа','работе','работы'],"I'm walking to work.",'Voy al trabajo (a pie).','Vou a pé para o trabalho.'],
    ['Я иду из ___.','парк','парка',['парк','парке','парку'],"I'm walking from the park.",'Vengo del parque.','Venho do parque.'],
    ['Я еду на ___.','автобус','автобусе',['автобус','автобуса','автобусом'],"I'm going by bus.",'Voy en autobús.','Vou de autocarro.'],
    ['Я иду с ___.','работа','работы',['работу','работе','работой'],"I'm coming from work.",'Vengo del trabajo.','Venho do trabalho.'],
    ['Мы едем на ___.','море','море',['моря','морю','морем'],"We're going to the sea.",'Vamos al mar.','Vamos ao mar.']
  ],
  tips: {
    es: ['«Идти» = ir a pie; «ехать» = ir en transporte. Ambos: un solo sentido, ahora.',
         '«Ходить / ездить» = ir habitualmente o ir y volver: «Я часто хожу в парк».',
         '¿Adónde? → в / на + acusativo (в парк, на работу). ¿De dónde? → из / с + genitivo (из парка, с работы). Pareja: в → из, на → с.',
         'Imperativo formal: «Иди прямо!» → «Идите прямо!»; «Зайди в аптеку!» → «Зайдите в аптеку!».'],
    en: ['«Идти» = go on foot; «ехать» = go by transport. Both mean one direction, right now.',
         '«Ходить / ездить» = go regularly or there and back: «Я часто хожу в парк».',
         'Where to? → в / на + accusative (в парк, на работу). Where from? → из / с + genitive (из парка, с работы). Pairs: в → из, на → с.',
         'Polite imperative: «Иди прямо!» → «Идите прямо!»; «Зайди в аптеку!» → «Зайдите в аптеку!».'],
    pt: ['«Идти» = ir a pé; «ехать» = ir de transporte. Ambos: um só sentido, agora.',
         '«Ходить / ездить» = ir habitualmente ou ir e voltar: «Я часто хожу в парк».',
         'Para onde? → в / на + acusativo (в парк, на работу). De onde? → из / с + genitivo (из парка, с работы). Pares: в → из, на → с.',
         'Imperativo formal: «Иди прямо!» → «Идите прямо!»; «Зайди в аптеку!» → «Зайдите в аптеку!».']
  }
},
{
  n: 4, img: 'img/units/u4.webp', ru: 'Кому? Потребности и состояния',
  t: { es: '¿A quién? Necesidades y estados', en: 'To whom? Needs and states', pt: 'A quem? Necessidades e estados' },
  topics: 'Дательный падеж · Мне нужно… · Мне холодно. Мне 20 лет. · Предлоги «к» и «по»',
  vocab: [
    ['врач','м.','doctor','médico','médico'],
    ['лупа','ж.','magnifying glass','lupa','lupa'],
    ['лекарство','ср.','medicine','medicamento','medicamento'],
    ['часы','мн.','watch / clock','reloj','relógio'],
    ['очки','мн.','glasses','gafas','óculos'],
    ['ручка','ж.','pen','bolígrafo','caneta'],
    ['платье','ср.','dress','vestido','vestido'],
    ['билет','м.','ticket','billete / entrada','bilhete / entrada'],
    ['документ','м.','document','documento','documento'],
    ['карта','ж.','map','mapa','mapa'],
    ['друг','м.','friend (male)','amigo','amigo'],
    ['город','м.','city','ciudad','cidade']
  ],
  phrases: [
    ['Мне нужна лупа.','I need a magnifying glass.','Necesito una lupa.','Preciso de uma lupa.'],
    ['Мне нравятся очки.','I like the glasses.','Me gustan las gafas.','Gosto dos óculos.'],
    ['Я хочу помочь другу.','I want to help a friend.','Quiero ayudar a un amigo.','Quero ajudar um amigo.']
  ],
  nouns: [
    ['врач','м. · 2-е скл.','врач','врача','врачу','врача','врачом','враче'],
    ['друг','м. · 2-е скл.','друг','друга','другу','друга','другом','друге'],
    ['лупа','ж. · 1-е скл.','лупа','лупы','лупе','лупу','лупой','лупе'],
    ['лекарство','ср. · 2-е скл.','лекарство','лекарства','лекарству','лекарство','лекарством','лекарстве']
  ],
  cases: [2,0],
  cloze: [
    ['Я иду к ___.','врач','врачу',['врач','врача','врачом'],"I'm going to the doctor.",'Voy al médico.','Vou ao médico.'],
    ['Я хочу помочь ___.','друг','другу',['друга','друг','другом'],'I want to help a friend.','Quiero ayudar a un amigo.','Quero ajudar um amigo.'],
    ['Мне нужна ___.','лупа','лупа',['лупу','лупы','лупе'],'I need a magnifying glass.','Necesito una lupa.','Preciso de uma lupa.'],
    ['Я гуляю по ___.','город','городу',['город','города','городе'],'I walk around the city.','Paseo por la ciudad.','Passeio pela cidade.'],
    ['Мне ___ очки.','нравиться','нравятся',['нравится','нужен','нужна'],'I like the glasses.','Me gustan las gafas.','Gosto dos óculos.']
  ],
  tips: {
    es: ['Dativo = ¿a quién?: мне, тебе, ему, ей, нам, вам, им. «Я звоню Алисе», «Марк помогает Луису».',
         '«Нужен / нужна / нужно / нужны» concuerda con lo necesario: «Мне нужна лупа», «Мне нужно лекарство», «Мне нужны очки».',
         'Estados y edad con dativo: «Мне холодно», «Ей страшно», «Мне двадцать лет».',
         '«Нравится» con una cosa, «нравятся» con varias: depende del objeto, no de «мне». «к + dativo» = hacia alguien (к врачу); «по + dativo» = por (по городу).'],
    en: ['Dative = to whom?: мне, тебе, ему, ей, нам, вам, им. «Я звоню Алисе», «Марк помогает Луису».',
         '«Нужен / нужна / нужно / нужны» agrees with the thing needed: «Мне нужна лупа», «Мне нужно лекарство», «Мне нужны очки».',
         'States and age use the dative: «Мне холодно», «Ей страшно», «Мне двадцать лет».',
         '«Нравится» with one thing, «нравятся» with several: it depends on the object, not on «мне». «к + dative» = towards someone (к врачу); «по + dative» = along/around (по городу).'],
    pt: ['Dativo = a quem?: мне, тебе, ему, ей, нам, вам, им. «Я звоню Алисе», «Марк помогает Луису».',
         '«Нужен / нужна / нужно / нужны» concorda com o que se precisa: «Мне нужна лупа», «Мне нужно лекарство», «Мне нужны очки».',
         'Estados e idade com dativo: «Мне холодно», «Ей страшно», «Мне двадцать лет».',
         '«Нравится» com uma coisa, «нравятся» com várias: depende do objeto, não de «мне». «к + dativo» = para junto de alguém (к врачу); «по + dativo» = por (по городу).']
  }
},
{
  n: 5, img: 'img/units/u5.webp', ru: 'Покупки и винительный падеж',
  t: { es: 'Compras y acusativo', en: 'Shopping and the accusative', pt: 'Compras e acusativo' },
  topics: 'Покупки · Винительный падеж · Три склонения · Сколько стоит?',
  vocab: [
    ['словарь','м.','dictionary','diccionario','dicionário'],
    ['тетрадь','ж.','notebook','cuaderno','caderno'],
    ['продавец','м.','salesperson','vendedor','vendedor'],
    ['рубль','м.','rouble','rublo','rublo'],
    ['телефон','м.','phone','teléfono','telefone'],
    ['батарея','ж.','battery','batería','bateria'],
    ['камера','ж.','camera','cámara','câmara'],
    ['кабель','м.','cable','cable','cabo'],
    ['хлеб','м.','bread','pan','pão'],
    ['молоко','ср.','milk','leche','leite'],
    ['сыр','м.','cheese','queso','queijo'],
    ['книга','ж.','book','libro','livro']
  ],
  phrases: [
    ['Я хочу купить словарь.','I want to buy a dictionary.','Quiero comprar un diccionario.','Quero comprar um dicionário.'],
    ['Я вижу продавца.','I can see the salesperson.','Veo al vendedor.','Vejo o vendedor.'],
    ['Я покупаю хлеб и молоко.','I am buying bread and milk.','Compro pan y leche.','Compro pão e leite.']
  ],
  nouns: [
    ['словарь','м. · 2-е скл.','словарь','словаря','словарю','словарь','словарём','словаре'],
    ['тетрадь','ж. · 3-е скл.','тетрадь','тетради','тетради','тетрадь','тетрадью','тетради'],
    ['продавец','м. · 2-е скл.','продавец','продавца','продавцу','продавца','продавцом','продавце'],
    ['рубль','м. · 2-е скл.','рубль','рубля','рублю','рубль','рублём','рубле']
  ],
  cases: [3],
  cloze: [
    ['Я хочу купить ___.','словарь','словарь',['словаря','словарю','словарём'],'I want to buy a dictionary.','Quiero comprar un diccionario.','Quero comprar um dicionário.'],
    ['Я вижу ___.','продавец','продавца',['продавец','продавцу','продавцом'],'I can see the salesperson.','Veo al vendedor.','Vejo o vendedor.'],
    ['Я покупаю новую ___.','книга','книгу',['книга','книги','книге'],"I'm buying a new book.",'Compro un libro nuevo.','Compro um livro novo.'],
    ['Я покупаю ___.','тетрадь','тетрадь',['тетради','тетрадью','тетрадей'],"I'm buying a notebook.",'Compro un cuaderno.','Compro um caderno.'],
    ['Это стоит сто ___.','рубль','рублей',['рубль','рубля','рублём'],'It costs a hundred roubles.','Cuesta cien rublos.','Custa cem rublos.']
  ],
  tips: {
    es: ['El acusativo marca el objeto directo: «Я покупаю книгу», «Я вижу продавца».',
         'Masculino inanimado: acusativo = nominativo (телефон → телефон). Masculino animado: acusativo = genitivo (продавец → продавца).',
         '1.ª declinación: книга → книгу. 3.ª (femenino en -ь): тетрадь → тетрадь, no cambia.',
         'El adjetivo concuerda: новая книга → новую книгу; новый продавец → нового продавца. «Кино» y «кафе» no se declinan.'],
    en: ['The accusative marks the direct object: «Я покупаю книгу», «Я вижу продавца».',
         'Masculine inanimate: accusative = nominative (телефон → телефон). Masculine animate: accusative = genitive (продавец → продавца).',
         '1st declension: книга → книгу. 3rd (feminine in -ь): тетрадь → тетрадь, no change.',
         'Adjectives agree: новая книга → новую книгу; новый продавец → нового продавца. «Кино» and «кафе» never decline.'],
    pt: ['O acusativo marca o objeto direto: «Я покупаю книгу», «Я вижу продавца».',
         'Masculino inanimado: acusativo = nominativo (телефон → телефон). Masculino animado: acusativo = genitivo (продавец → продавца).',
         '1.ª declinação: книга → книгу. 3.ª (feminino em -ь): тетрадь → тетрадь, não muda.',
         'O adjetivo concorda: новая книга → новую книгу; новый продавец → нового продавца. «Кино» e «кафе» não se declinam.']
  }
},
{
  n: 6, img: 'img/units/u6.webp', ru: 'Город и дорога',
  t: { es: 'La ciudad y el camino', en: 'The city and the way', pt: 'A cidade e o caminho' },
  topics: 'Где? Куда? · Как пройти? · Как добраться? · Вежливые просьбы',
  vocab: [
    ['музей','м.','museum','museo','museu'],
    ['аптека','ж.','pharmacy','farmacia','farmácia'],
    ['площадь','ж.','square','plaza','praça'],
    ['остановка','ж.','bus stop','parada','paragem'],
    ['улица','ж.','street','calle','rua'],
    ['мост','м.','bridge','puente','ponte'],
    ['станция','ж.','station','estación','estação'],
    ['перекрёсток','м.','intersection','cruce','cruzamento'],
    ['набережная','ж.','waterfront','paseo ribereño','passeio ribeirinho'],
    ['театр','м.','theatre','teatro','teatro'],
    ['ресторан','м.','restaurant','restaurante','restaurante'],
    ['двор','м.','courtyard','patio','pátio']
  ],
  phrases: [
    ['Где находится аптека?','Where is the pharmacy?','¿Dónde está la farmacia?','Onde fica a farmácia?'],
    ['Идите прямо до остановки.','Go straight to the bus stop.','Siga recto hasta la parada.','Siga em frente até à paragem.'],
    ['Я иду в музей.','I am going to the museum.','Voy al museo.','Vou ao museu.']
  ],
  nouns: [
    ['музей','м. · 2-е скл.','музей','музея','музею','музей','музеем','музее'],
    ['аптека','ж. · 1-е скл.','аптека','аптеки','аптеке','аптеку','аптекой','аптеке'],
    ['площадь','ж. · 3-е скл.','площадь','площади','площади','площадь','площадью','площади'],
    ['остановка','ж. · 1-е скл.','остановка','остановки','остановке','остановку','остановкой','остановке']
  ],
  cases: [5,3,1],
  cloze: [
    ['Я в ___.','музей','музее',['музей','музея','музеем'],"I'm in the museum.",'Estoy en el museo.','Estou no museu.'],
    ['Я иду в ___.','музей','музей',['музее','музея','музею'],"I'm going to the museum.",'Voy al museo.','Vou ao museu.'],
    ['Идите до ___.','остановка','остановки',['остановку','остановке','остановка'],'Go as far as the bus stop.','Siga hasta la parada.','Siga até à paragem.'],
    ['Аптека на ___.','площадь','площади',['площадь','площадью','площадей'],'The pharmacy is on the square.','La farmacia está en la plaza.','A farmácia fica na praça.'],
    ['Аптека рядом с ___.','музей','музеем',['музей','музее','музея'],'The pharmacy is next to the museum.','La farmacia está al lado del museo.','A farmácia fica ao lado do museu.']
  ],
  tips: {
    es: ['¿Dónde? → в / на + preposicional: «Я в музее», «на площади».',
         '¿Adónde? → в / на + acusativo: «Я иду в музей», «на площадь». Para la dirección nunca se usa el preposicional.',
         '«до + genitivo» = hasta: «до остановки»; «напротив + genitivo»; «рядом с + instrumental»: «рядом с музеем».',
         'Para preguntar: «Извините, как пройти к музею?», «Как добраться до вокзала?», «Это далеко?».'],
    en: ['Where? → в / на + prepositional: «Я в музее», «на площади».',
         'Where to? → в / на + accusative: «Я иду в музей», «на площадь». Never use the prepositional for direction.',
         '«до + genitive» = as far as: «до остановки»; «напротив + genitive»; «рядом с + instrumental»: «рядом с музеем».',
         'Asking the way: «Извините, как пройти к музею?», «Как добраться до вокзала?», «Это далеко?».'],
    pt: ['Onde? → в / на + preposicional: «Я в музее», «на площади».',
         'Para onde? → в / на + acusativo: «Я иду в музей», «на площадь». Para a direção nunca se usa o preposicional.',
         '«до + genitivo» = até: «до остановки»; «напротив + genitivo»; «рядом с + instrumental»: «рядом с музеем».',
         'Para perguntar: «Извините, как пройти к музею?», «Как добраться до вокзала?», «Это далеко?».']
  }
},
{
  n: 7, img: 'img/units/u7.webp', ru: 'Прошедшее время и погода',
  t: { es: 'El pasado y el tiempo', en: 'Past tense and weather', pt: 'O passado e o tempo' },
  topics: 'Прошедшее время · Вчера и сегодня · Погода · Времена года',
  vocab: [
    ['погода','ж.','weather','tiempo (clima)','tempo (clima)'],
    ['дождь','м.','rain','lluvia','chuva'],
    ['ветер','м.','wind','viento','vento'],
    ['зонт','м.','umbrella','paraguas','guarda-chuva'],
    ['снег','м.','snow','nieve','neve'],
    ['солнце','ср.','sun','sol','sol'],
    ['куртка','ж.','jacket','chaqueta','casaco'],
    ['открытка','ж.','postcard','postal','postal'],
    ['сообщение','ср.','message','mensaje','mensagem'],
    ['фильм','м.','film','película','filme'],
    ['картина','ж.','painting','cuadro','quadro'],
    ['скульптура','ж.','sculpture','escultura','escultura']
  ],
  phrases: [
    ['Вчера шёл дождь.','It rained yesterday.','Ayer llovió.','Ontem choveu.'],
    ['Мы взяли зонт.','We took an umbrella.','Cogimos un paraguas.','Levámos um guarda-chuva.'],
    ['Вчера мы смотрели фильм.','We watched a film yesterday.','Ayer vimos una película.','Ontem vimos um filme.']
  ],
  nouns: [
    ['погода','ж. · 1-е скл.','погода','погоды','погоде','погоду','погодой','погоде'],
    ['дождь','м. · 2-е скл.','дождь','дождя','дождю','дождь','дождём','дожде'],
    ['ветер','м. · 2-е скл.','ветер','ветра','ветру','ветер','ветром','ветре'],
    ['зонт','м. · 2-е скл.','зонт','зонта','зонту','зонт','зонтом','зонте']
  ],
  cases: [0,3],
  cloze: [
    ['Вчера ___ дождь.','идти','шёл',['шла','шло','шли'],'It rained yesterday.','Ayer llovió.','Ontem choveu.'],
    ['Вчера ___ хорошая погода.','быть','была',['был','было','были'],'The weather was good yesterday.','Ayer hizo buen tiempo.','Ontem esteve bom tempo.'],
    ['Мы взяли ___.','зонт','зонт',['зонта','зонтом','зонту'],'We took an umbrella.','Cogimos un paraguas.','Levámos um guarda-chuva.'],
    ['Наталья вчера ___ дома.','быть','была',['был','было','были'],'Natalya was at home yesterday.','Natalia estuvo en casa ayer.','A Natália esteve em casa ontem.'],
    ['Вчера мы ___ фильм.','смотреть','смотрели',['смотрел','смотрела','смотрим'],'We watched a film yesterday.','Ayer vimos una película.','Ontem vimos um filme.']
  ],
  tips: {
    es: ['El pasado se forma con la raíz del infinitivo + -л: читать → читал, работать → работал.',
         'Cambia por género y número, no por persona: он читал, она читала, оно было, они читали. «Я работал» (él) / «я работала» (ella).',
         'Formas especiales: быть → был/была/было/были; идти → шёл/шла/шло/шли; есть → ел/ела/ели.',
         'El tiempo: «Вчера было холодно», «Шёл дождь / снег», «Дул сильный ветер», «Светило солнце».'],
    en: ['The past is formed from the infinitive stem + -л: читать → читал, работать → работал.',
         'It changes for gender and number, not person: он читал, она читала, оно было, они читали. «Я работал» (he) / «я работала» (she).',
         'Special forms: быть → был/была/было/были; идти → шёл/шла/шло/шли; есть → ел/ела/ели.',
         'Weather: «Вчера было холодно», «Шёл дождь / снег», «Дул сильный ветер», «Светило солнце».'],
    pt: ['O passado forma-se com o radical do infinitivo + -л: читать → читал, работать → работал.',
         'Muda em género e número, não em pessoa: он читал, она читала, оно было, они читали. «Я работал» (ele) / «я работала» (ela).',
         'Formas especiais: быть → был/была/было/были; идти → шёл/шла/шло/шли; есть → ел/ела/ели.',
         'O tempo: «Вчера было холодно», «Шёл дождь / снег», «Дул сильный ветер», «Светило солнце».']
  }
},
{
  n: 8, img: 'img/units/u8.webp', ru: 'Предложный падеж: место и тема',
  t: { es: 'Preposicional: lugar y tema', en: 'Prepositional: place and topic', pt: 'Preposicional: lugar e tema' },
  topics: 'Предложный падеж · Где? «В» или «на»? · О ком? О чём? · Где ты был вчера?',
  vocab: [
    ['театр','м.','theatre','teatro','teatro'],
    ['квартира','ж.','flat / apartment','piso / apartamento','apartamento'],
    ['Россия','ж.','Russia','Rusia','Rússia'],
    ['лес','м.','forest','bosque','floresta'],
    ['дача','ж.','country house','casa de campo','casa de campo'],
    ['сад','м.','garden','jardín','jardim'],
    ['этаж','м.','floor / storey','planta (edificio)','andar (edifício)'],
    ['остров','м.','island','isla','ilha'],
    ['библиотека','ж.','library','biblioteca','biblioteca'],
    ['концерт','м.','concert','concierto','concerto'],
    ['балет','м.','ballet','ballet','bailado'],
    ['веранда','ж.','veranda','porche / veranda','varanda']
  ],
  phrases: [
    ['Я живу в России.','I live in Russia.','Vivo en Rusia.','Vivo na Rússia.'],
    ['Мы говорим о театре.','We are talking about the theatre.','Hablamos del teatro.','Falamos sobre o teatro.'],
    ['Мы гуляем в лесу.','We are walking in the forest.','Paseamos por el bosque.','Passeamos na floresta.']
  ],
  nouns: [
    ['театр','м. · 2-е скл.','театр','театра','театру','театр','театром','театре'],
    ['квартира','ж. · 1-е скл.','квартира','квартиры','квартире','квартиру','квартирой','квартире'],
    ['Россия','ж. · 1-е скл. · -ия','Россия','России','России','Россию','Россией','России'],
    ['лес','м. · 2-е скл.','лес','леса','лесу','лес','лесом','лесе']
  ],
  cases: [5],
  cloze: [
    ['Я живу в ___.','Россия','России',['Россия','Россию','Россией'],'I live in Russia.','Vivo en Rusia.','Vivo na Rússia.'],
    ['Мы говорим о ___.','театр','театре',['театр','театра','театром'],"We're talking about the theatre.",'Hablamos del teatro.','Falamos sobre o teatro.'],
    ['Мы гуляем в ___.','лес','лесу',['лесе','лес','леса'],"We're walking in the forest.",'Paseamos por el bosque.','Passeamos na floresta.'],
    ['Я в ___.','квартира','квартире',['квартира','квартиру','квартиры'],"I'm in the flat.",'Estoy en el piso.','Estou no apartamento.'],
    ['Она думает обо ___.','я','мне',['меня','мной','я'],'She thinks about me.','Ella piensa en mí.','Ela pensa em mim.']
  ],
  tips: {
    es: ['Lugar: в / на + preposicional: «в квартире», «на концерте», «в России». «В» o «на» se aprende con cada palabra: в театре, pero на концерте.',
         'Tema: о / об / обо + preposicional: «о театре», «об Алисе» (ante vocal), «обо мне».',
         'Terminaciones especiales: -ия → -ии (Россия → в России), -ие → -ии, femenino en -ь → -и (на площади).',
         'Algunas palabras tienen forma de lugar en -у: в лесу, в саду, на мосту; pero el tema es «о лесе», «о саде».'],
    en: ['Place: в / на + prepositional: «в квартире», «на концерте», «в России». Learn в or на with each word: в театре, but на концерте.',
         'Topic: о / об / обо + prepositional: «о театре», «об Алисе» (before a vowel), «обо мне».',
         'Special endings: -ия → -ии (Россия → в России), -ие → -ии, feminine in -ь → -и (на площади).',
         'Some words have a locative in -у: в лесу, в саду, на мосту; but the topic is «о лесе», «о саде».'],
    pt: ['Lugar: в / на + preposicional: «в квартире», «на концерте», «в России». «В» ou «на» aprende-se com cada palavra: в театре, mas на концерте.',
         'Tema: о / об / обо + preposicional: «о театре», «об Алисе» (antes de vogal), «обо мне».',
         'Terminações especiais: -ия → -ии (Россия → в России), -ие → -ии, feminino em -ь → -и (на площади).',
         'Algumas palavras têm forma de lugar em -у: в лесу, в саду, на мосту; mas o tema é «о лесе», «о саде».']
  }
},
{
  n: 9, img: 'img/units/u9.webp', ru: 'Будущее время: планы и результат',
  t: { es: 'El futuro: planes y resultado', en: 'Future tense: plans and result', pt: 'O futuro: planos e resultado' },
  topics: 'Будущее время · Буду + инфинитив · Процесс и результат · Планы',
  vocab: [
    ['билет','м.','train ticket','billete de tren','bilhete de comboio'],
    ['письмо','ср.','letter','carta','carta'],
    ['вокзал','м.','railway station','estación de tren','estação ferroviária'],
    ['неделя','ж.','week','semana','semana'],
    ['поезд','м.','train','tren','comboio'],
    ['час','м.','hour','hora','hora'],
    ['месяц','м.','month','mes','mês'],
    ['расписание','ср.','timetable','horario','horário'],
    ['платформа','ж.','platform','andén','plataforma'],
    ['вагон','м.','train carriage','vagón','carruagem'],
    ['место','ср.','seat','plaza / asiento','lugar / assento'],
    ['город','м.','city','ciudad','cidade']
  ],
  phrases: [
    ['Завтра я куплю билет.','I will buy a ticket tomorrow.','Mañana compraré un billete.','Amanhã comprarei um bilhete.'],
    ['Я буду писать письмо.','I will be writing a letter.','Estaré escribiendo una carta.','Estarei a escrever uma carta.'],
    ['Я напишу письмо на следующей неделе.','I will write a letter next week.','Escribiré una carta la próxima semana.','Escreverei uma carta na próxima semana.']
  ],
  nouns: [
    ['билет','м. · 2-е скл.','билет','билета','билету','билет','билетом','билете'],
    ['письмо','ср. · 2-е скл.','письмо','письма','письму','письмо','письмом','письме'],
    ['вокзал','м. · 2-е скл.','вокзал','вокзала','вокзалу','вокзал','вокзалом','вокзале'],
    ['неделя','ж. · 1-е скл.','неделя','недели','неделе','неделю','неделей','неделе']
  ],
  cases: [3,5],
  cloze: [
    ['Завтра я ___ билет.','купить','куплю',['купил','покупал','буду купить'],"I'll buy a ticket tomorrow.",'Mañana compraré un billete.','Amanhã comprarei um bilhete.'],
    ['Я буду ___ письмо.','писать','писать',['напишу','написать','пишу'],"I'll be writing a letter.",'Estaré escribiendo una carta.','Estarei a escrever uma carta.'],
    ['На следующей ___ я поеду на вокзал.','неделя','неделе',['неделю','неделя','недели'],"Next week I'll go to the station.",'La próxima semana iré a la estación.','Na próxima semana irei à estação.'],
    ['Мы ___ работать.','быть','будем',['будет','будут','будешь'],'We will be working.','Vamos a estar trabajando.','Vamos estar a trabalhar.'],
    ['Я поеду на ___.','вокзал','вокзал',['вокзале','вокзала','вокзалом'],"I'll go to the station.",'Iré a la estación.','Irei à estação.']
  ],
  tips: {
    es: ['Futuro compuesto (proceso): буду / будешь / будет / будем / будете / будут + infinitivo imperfectivo: «Я буду читать».',
         'Futuro simple (resultado): el verbo perfectivo conjugado, sin «буду»: прочитаю, напишу, куплю, сделаю.',
         '«Я буду писать письмо» = proceso; «Я напишу письмо» = resultado. Nunca «буду куплю» ni «буду прочитать».',
         '¿Cuándo?: завтра, послезавтра, скоро, на следующей неделе, через час, через месяц.'],
    en: ['Compound future (process): буду / будешь / будет / будем / будете / будут + imperfective infinitive: «Я буду читать».',
         'Simple future (result): the conjugated perfective verb, without «буду»: прочитаю, напишу, куплю, сделаю.',
         '«Я буду писать письмо» = process; «Я напишу письмо» = result. Never «буду куплю» or «буду прочитать».',
         'When?: завтра, послезавтра, скоро, на следующей неделе, через час, через месяц.'],
    pt: ['Futuro composto (processo): буду / будешь / будет / будем / будете / будут + infinitivo imperfetivo: «Я буду читать».',
         'Futuro simples (resultado): o verbo perfetivo conjugado, sem «буду»: прочитаю, напишу, куплю, сделаю.',
         '«Я буду писать письмо» = processo; «Я напишу письмо» = resultado. Nunca «буду куплю» nem «буду прочитать».',
         'Quando?: завтра, послезавтра, скоро, на следующей неделе, через час, через месяц.']
  }
},
{
  n: 10, img: 'img/units/u10.webp', ru: 'Творительный падеж: с кем? кем? чем?',
  t: { es: 'Instrumental: ¿con quién? ¿como qué?', en: 'Instrumental: with whom? as what?', pt: 'Instrumental: com quem? como quê?' },
  topics: 'Творительный падеж · С кем? С чем? · Кем вы работаете? · Чем ты занимаешься?',
  vocab: [
    ['друг','м.','friend','amigo','amigo'],
    ['подруга','ж.','friend (female)','amiga','amiga'],
    ['врач','м.','doctor','médico','médico'],
    ['переводчик','м.','translator','traductor','tradutor'],
    ['художник','м.','artist, painter','pintor, artista','pintor, artista'],
    ['профессия','ж.','profession','profesión','profissão'],
    ['спорт','м.','sport','deporte','desporto'],
    ['музыка','ж.','music','música','música'],
    ['история','ж.','history','historia','história'],
    ['замок','м.','castle','castillo','castelo'],
    ['башня','ж.','tower','torre','torre'],
    ['сюрприз','м.','surprise','sorpresa','surpresa']
  ],
  phrases: [
    ['Я иду в кино с другом.',"I'm going to the cinema with a friend.",'Voy al cine con un amigo.','Vou ao cinema com um amigo.'],
    ['Я работаю врачом.','I work as a doctor.','Trabajo de médico.','Trabalho como médico.'],
    ['Она занимается музыкой.','She does music.','Ella se dedica a la música.','Ela dedica-se à música.']
  ],
  nouns: [
    ['друг','м. · 2-е скл.','друг','друга','другу','друга','другом','друге'],
    ['подруга','ж. · 1-е скл.','подруга','подруги','подруге','подругу','подругой','подруге'],
    ['молоко','ср. · 2-е скл.','молоко','молока','молоку','молоко','молоком','молоке'],
    ['дверь','ж. · 3-е скл.','дверь','двери','двери','дверь','дверью','двери']
  ],
  cases: [4],
  cloze: [
    ['Я иду в кино с ___.','друг','другом',['друга','другу','друге'],"I'm going to the cinema with a friend.",'Voy al cine con un amigo.','Vou ao cinema com um amigo.'],
    ['Кофе с ___, пожалуйста.','молоко','молоком',['молоко','молока','молоке'],'Coffee with milk, please.','Café con leche, por favor.','Café com leite, por favor.'],
    ['Я работаю ___.','врач','врачом',['врач','врача','врачу'],'I work as a doctor.','Trabajo de médico.','Trabalho como médico.'],
    ['Она занимается ___.','музыка','музыкой',['музыка','музыку','музыке'],'She does music.','Ella se dedica a la música.','Ela dedica-se à música.'],
    ['Дом с синей ___.','дверь','дверью',['дверь','двери','дверей'],'A house with a blue door.','Una casa con la puerta azul.','Uma casa com a porta azul.']
  ],
  tips: {
    es: ['Terminaciones: masc./neutro -ом / -ем (другом, письмом, музеем); femenino -ой / -ей (мамой, Натальей); femenino en -ь → -ью (дверью); plural -ами / -ями.',
         '«с + instrumental» = con: «Я иду с другом», «чай с лимоном», «со мной, с тобой, с ним, с ней».',
         'Profesión y aficiones: работать / быть / стать + кем?: «Я работаю врачом»; заниматься / интересоваться + чем?: «Я занимаюсь спортом».',
         'Ubicación: над, под, перед, за, между, рядом с + instrumental: «Кот под столом». Ojo: «за́мок» = castillo, «замо́к» = cerradura.'],
    en: ['Endings: masc./neuter -ом / -ем (другом, письмом, музеем); feminine -ой / -ей (мамой, Натальей); feminine in -ь → -ью (дверью); plural -ами / -ями.',
         '«с + instrumental» = with: «Я иду с другом», «чай с лимоном», «со мной, с тобой, с ним, с ней».',
         'Jobs and hobbies: работать / быть / стать + кем?: «Я работаю врачом»; заниматься / интересоваться + чем?: «Я занимаюсь спортом».',
         'Position: над, под, перед, за, между, рядом с + instrumental: «Кот под столом». Careful: «за́мок» = castle, «замо́к» = lock.'],
    pt: ['Terminações: masc./neutro -ом / -ем (другом, письмом, музеем); feminino -ой / -ей (мамой, Натальей); feminino em -ь → -ью (дверью); plural -ами / -ями.',
         '«с + instrumental» = com: «Я иду с другом», «чай с лимоном», «со мной, с тобой, с ним, с ней».',
         'Profissão e passatempos: работать / быть / стать + кем?: «Я работаю врачом»; заниматься / интересоваться + чем?: «Я занимаюсь спортом».',
         'Posição: над, под, перед, за, между, рядом с + instrumental: «Кот под столом». Atenção: «за́мок» = castelo, «замо́к» = fechadura.']
  }
}
];

window.HEROES = [
  { id:'luis', ru:'Луис', role:{ es:'Estudiante argentino', en:'Student from Argentina', pt:'Estudante argentino' },
    bio:{ es:'Viajero, pintor y filósofo. En la saga «Дикий час» defiende Belgrado, Mendoza y Madrid junto a Natasha y el dragón Zmaj.',
          en:'Traveller, painter and philosopher. In the «Дикий час» saga he defends Belgrade, Mendoza and Madrid with Natasha and the dragon Zmaj.',
          pt:'Viajante, pintor e filósofo. Na saga «Дикий час» defende Belgrado, Mendoza e Madrid com a Natasha e o dragão Zmaj.' } },
  { id:'natalya', ru:'Наталья', role:{ es:'Amiga de Luis', en:'Luis’s friend', pt:'Amiga do Luís' },
    bio:{ es:'Moscovita que Luis conoce en los Estanques del Patriarca. Guarda el diario de su tatarabuelo, ligado a los Pergaminos Imperiales.',
          en:'A Muscovite Luis meets at Patriarch’s Ponds. She keeps her great-great-grandfather’s diary, linked to the Imperial Scrolls.',
          pt:'Moscovita que o Luís conhece nos Lagos do Patriarca. Guarda o diário do trisavô, ligado aos Pergaminhos Imperiais.' } },
  { id:'natasha', ru:'Наташа', role:{ es:'Amiga de Serbia', en:'Friend from Serbia', pt:'Amiga da Sérvia' },
    bio:{ es:'Valiente y apasionada. En Belgrado despierta en ella una fuerza antigua; vuela sobre el dragón Zmaj.',
          en:'Brave and passionate. In Belgrade an ancient power awakens in her; she flies on the dragon Zmaj.',
          pt:'Corajosa e apaixonada. Em Belgrado desperta nela uma força antiga; voa no dragão Zmaj.' } },
  { id:'mark', ru:'Марк', role:{ es:'Detective', en:'Detective', pt:'Detetive' },
    bio:{ es:'Detective de la brumosa ciudad de Sineya. Busca el Tren Fantasma, que se llevó a la mujer que amaba.',
          en:'A detective from the misty city of Sineya. He hunts the Ghost Train, which carried away the woman he loved.',
          pt:'Detetive da cidade enevoada de Sineya. Procura o Comboio Fantasma, que levou a mulher que amava.' } },
  { id:'alisa', ru:'Алиса', role:{ es:'Psicóloga', en:'Psychologist', pt:'Psicóloga' },
    bio:{ es:'En las novelas se llama Alicia: astróloga, numeróloga y amante de los enigmas. Sueña con la libertad y sube al Tren Fantasma.',
          en:'In the novels she is Alicia: astrologer, numerologist and lover of riddles. She dreams of freedom and boards the Ghost Train.',
          pt:'Nos romances chama-se Alícia: astróloga, numeróloga e amante de enigmas. Sonha com a liberdade e embarca no Comboio Fantasma.' } },
  { id:'vasily', ru:'Василий', role:{ es:'Detective (lección 3)', en:'Detective (lesson 3)', pt:'Detetive (lição 3)' },
    bio:{ es:'Frío y solitario. Persigue a una ladrona misteriosa y para eso acude a citas peligrosas.',
          en:'Cool-headed and solitary. He chases a mysterious thief and goes on dangerous dates to catch her.',
          pt:'Frio e solitário. Persegue uma ladra misteriosa e, para isso, vai a encontros perigosos.' } },
  { id:'sofya', ru:'Софья', role:{ es:'Amiga de Natasha', en:'Natasha’s friend', pt:'Amiga da Natasha' },
    bio:{ es:'La heroína rubia de «Дикий час». En Belgrado forma parte de una conspiración secreta en la torre Nebojša.',
          en:'The fair-haired heroine of «Дикий час». In Belgrade she is part of a secret plot in the Nebojša tower.',
          pt:'A heroína loira de «Дикий час». Em Belgrado faz parte de uma conspiração secreta na torre Nebojša.' } }
];
