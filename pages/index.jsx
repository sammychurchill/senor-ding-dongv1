import Head from 'next/head'
import { Container, Row, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
// import db from '../db'

function Home(props) {
  const { settings, users, games } = props
  console.log(users)
  return (
    <Container className="md-container">
      <Head>
        <title>Senor Ding-Dong</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Container>
          <Row className="justify-content-md-between">
            <ListGroup>
              {games.map(game => {<ListGroupItem>game.name</ListGroupItem>})}
            </ListGroup>
          </Row>
          <Row className="justify-content-md-between">
            <ListGroup>
              {users.map(user => {<ListGroupItem>user.steamName</ListGroupItem>})}
            </ListGroup>
          </Row>
        </Container>
      </Container>

      <footer className="cntr-footer">
      </footer>
    </Container>
  )
}

Home.getInitialProps = async (ctx) => {
  // const settings = db.getSettings()
  // const games = db.getGames()
  // const users = db.getUsers()
  const settings = {}
  const games = [{name: "Deecep", turn: 9001, id: 1}]
  const users = [{discordName: 'Deecep', steamName: 'Deecep'}, {discordName: 'sam_the_deer', steamName: 'samthedeer'}]
  return {settings, games, users}
}

export default Home