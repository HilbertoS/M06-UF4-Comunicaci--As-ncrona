

class dataContext {
    constructor() {
        this.client = new Client({
                user: 'postgres',
                host: 'localhost',
                database: 'northwind',
                password: 'alubbdd',
                port: 5432
        })

        this.client.connect()
    }

  async  executeQuery(query) {
    
      try {
            const resultado = await this.client.query(query)

            console.log('Query ejecutada con exito')
            return JSON.stringify(resultado.rows)

            this.client.end()

        } catch (error) {
            console.log('Error en la query', error)
        }
    }
}