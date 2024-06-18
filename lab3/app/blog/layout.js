export default function BlogLayout({ Children }){
    return (
        <layout>
            <div>Blog Menu</div>
            <div>{Children}</div>
        </layout>
    )
}