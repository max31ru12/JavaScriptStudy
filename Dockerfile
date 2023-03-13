# Указываем версию через двоеточие, без версии скачается последняя
FROM node:latest

# Из этой же папки будем брать и копировать все файлы и будем помещать в папку javascript 
COPY . /javascript

# Рабочая директория
WORKDIR /javascript

# Здесь можно указать порт (указать страничку в браузере где покажутся результаты)
EXPOSE 8001

# Позволяет выполнить определенные действия при первоначальном запуске самого контейнера (один раз)
RUN npm install -g npm

# Выполняется каждый раз при запуске контейнера (каждый раз)
# Команда выглядит npm start
CMD ["npm", "start"]

# Дальше все это нужно собрать
# docker build "Путь к докер-файлу"

# Запустить докер 3001 - порт на локальном компьютере 8001 - соединяемся с портом 8001
# docker run -p 3001:8001 f8dc5914652d
