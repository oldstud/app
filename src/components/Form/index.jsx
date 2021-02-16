import React from 'react'


import { ButtonSend } from '../ButtonSend';
import { CustomInput } from '../CustomInput'
import { RenderBlog } from '../RenderBlog';
import { TArea } from '../TArea'


import { DivForm } from './styles';


export class Form extends React.Component {
    state = {
        title: "",
        fullName: "",
        text: "",
        photo: "",
        data: [
            {
                fullName: "Pushkin Dmytro",
                photo: "https://cdn.shrm.org/image/upload/c_crop%2Ch_431%2Cw_766%2Cx_0%2Cy_0/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/California%20Resources/California2m_enph33_umyris?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjAsIngyIjo3NjYsInkyIjo0MzEsInciOjc2NiwiaCI6NDMxfX0%3D",
                text: "California is a state in the Pacific Region of the United States. With over 39.3 million residents across a total area of approximately 163,696 square miles (423,970 km2), it is the most populous U.S. state and the third-largest by area, as well as the world's thirty-fourth-most-populous subnational entity. California is also the most populated subnational entity in North America, and has its state capital in Sacramento. The Greater Los Angeles area and the San Francisco Bay Area are the nation's second- and fifth-most-populous urban regions, with more than 18.7 million and 9.6 million residents respectively.[13] Los Angeles is California's most populous city, and the country's second-most-populous, after New York City. California also has the nation's most populous county, Los Angeles County, and its largest county by area, San Bernardino County. The City and County of San Francisco is both the country's second most densely populated major city after New York City and the fifth-most-densely populated county, behind only four of the five New York City boroughs. (link:https://en.wikipedia.org/wiki/California)",
                title: "CALIFORNIA"
            }
        ]

    };

    onChangeInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    clickSend = () => {
        const { data, title, text, photo, fullName } = this.state;
        let infoObj = {
            title,
            fullName,
            text,
            photo
        }
        data.push(infoObj)
        this.setState({
            data: data,
            title: '',
            fullName: '',
            text: '',
            photo: ''
        })
        console.log(this.state)
    }


    render() {
        const { title, fullName, text, photo, data } = this.state;
        console.log(this.state)
        return (
            <div>
                <RenderBlog data={data} />
                <DivForm>

                    <h2 id="addArticle">New publication</h2>

                    <CustomInput value={title} name="title" someEvent={this.onChangeInput} placeholder='Title' />
                    <CustomInput value={fullName} name="fullName" someEvent={this.onChangeInput} placeholder="Your Name" />
                    <TArea value={text} name="text" someEvent={this.onChangeInput} placeholder="Text of article..." />
                    <CustomInput value={photo} name="photo" someEvent={this.onChangeInput} placeholder="Image URL (Example:https://www.example.com/image.png)" />
                    <ButtonSend click={this.clickSend} />
                </DivForm>
            </div>
        )
    }
}

