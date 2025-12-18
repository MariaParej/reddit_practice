//necesito darle como argumento lo que el usuario ha elegido (subreddit)
const Api = async (subreddit) => {
  //reddit tiene muchas restricciones con el localhost(CORD policy), lo voy hacer manual
  try {
    const results = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
    if (results.ok) {
      const resultsJson = await results.json()
      return resultsJson
    } else {
      console.log('Fallo al intentar conseguir datos')
    }
  } catch (error) {
    console.log('Error al conectar con la API', error)
  }
  return {
    data: {
      children: [
        {
          data: {
            id: '1',
            title: '¡Soy un perrito muy mono!',
            author: 'Clark',
            ups: 1500,
            num_comments: 45,
            thumbnail: 'https://picsum.photos/id/237/600/400'
          }
        },
        {
          data: {
            id: '2',
            title: 'Es hora de picar',
            author: 'María',
            ups: 850,
            num_comments: 12,
            thumbnail: 'https://picsum.photos/id/1/600/400'
          }
        },
        {
          data: {
            id: '3',
            title: 'Aprendiendo React en el ciclo de DAM, ¿algún consejo?',
            author: 'dev',
            ups: 1540,
            num_comments: 85,
            thumbnail: 'https://picsum.photos/seed/picsum/200/300'
          }
        },
        {
          data: {
            id: '4',
            title: 'Tips para el rendimiento de mi cámara',
            author: 'Robe',
            ups: 890,
            num_comments: 42,
            thumbnail: 'https://picsum.photos/200/300/?blur'
          }
        },
        {
          data: {
            id: '5',
            title: 'Normativa marítima',
            author: 'sailor_ant',
            ups: 2300,
            num_comments: 120,
            thumbnail: 'https://picsum.photos/id/870/200/300?grayscale&blur=2'
          }
        },
        {
          data: {
            id: '6',
            title: 'Ayuda, mi ordenador no reinicia',
            author: 'Paula',
            ups: 3200,
            num_comments: 156,
            thumbnail: 'https://picsum.photos/id/180/600/400'
          }
        },
        {
          data: {
            id: '7',
            title: 'Experiencias en el extranjero',
            author: 'Pepita',
            ups: 120,
            num_comments: 58,
            thumbnail: 'https://picsum.photos/id/20/600/400'
          }
        },
        {
          data: {
            id: '8',
            title: 'Increíble paisaje que vi hoy',
            author: 'aventurera',
            ups: 4500,
            num_comments: 34,
            thumbnail: 'https://picsum.photos/id/10/600/400'
          }
        },
        {
          data: {
            id: '9',
            title: '¿Cómo elimino esta mancha?',
            author: 'Luis',
            ups: 980,
            num_comments: 25,
            thumbnail: 'https://picsum.photos/id/119/600/400'
          }
        },
        {
          data: {
            id: '10',
            title: 'Ayuda, no funciona mi disco duro',
            author: 'Alba',
            ups: 560,
            num_comments: 15,
            thumbnail: 'https://picsum.photos/id/160/600/400'
          }
        }
      ]
    }
  }
}

export { Api }
