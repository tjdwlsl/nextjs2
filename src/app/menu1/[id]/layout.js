import Menu1 from '@/app/components/menu/Menu1';
import Menu2 from '@/app/components/menu/Menu2';
import Menu3 from '@/app/components/menu/Menu3';
import './menu1.css'

// Layout은 반드시 인자(props)를 받아야 함
export default function Layout(props) {
    return(
        <>
            {props.params.id === '1' ? <Menu1 /> : props.params.id === '2' ? <Menu2 /> : <Menu3 />}
        </>
    );
}