function solve(arr) {
    let movies = [];
    arr.forEach((el)=> {
            if (el.includes('addMovie')) {
                let movie = el.replace("addMovie ", "");
                movies.push({name:movie});
                //console.log(movies[0])
          
        } else if (el.includes('directedBy')) {
            let dirName = el.split(' directedBy ');
            let name = dirName[0]
            let director = dirName[1]
            
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director
                }
            })
            //console.log(name)
        } else if (el.includes('onDate')) {
            let [name,date] = el.split(' onDate ');
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date
                }
            })
           // console.log(name) 
        }
   } )
   
   movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
    })
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])