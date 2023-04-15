import useFetch from "../hooks/useFetch"

class Products{
    constructor(url){
        this.data = useFetch(url)
    }
}   

export default Products