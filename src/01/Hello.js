import logo from '../logo.svg';
import '../01/Hello.css';

const Hello = () => {  //항상 대문자로 시작
    let name = '이해주';
    let git = 'https://github.com/hadduu13';

    return (            //return문 안에 내가 아는 태그들을 넣으면 됨            
        <main className='container'>
            <article data-theme="dark">
                <div>
                    <img src={logo} className='App-logo' alt='logo' />
                </div>
                <footer>
                    <hgroup>
                    <h1>{name}</h1>
                    <h2><a href={git}>{git}</a></h2>
                    </hgroup>
                </footer>
            </article>
        </main>
    );
}

export default Hello;  //export dafault로 내보내야 함