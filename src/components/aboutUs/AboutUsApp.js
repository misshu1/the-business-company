import React, { Component } from "react";
import Container from "./style/Container";
import ItemName from "./style/ItemName";
import ItemContainer from "./style/ItemContainer";
import ItemInfo from "./style/ItemInfo";
import Button from "./style/Button";
import ViewButton from "./style/ViewButton";

let selected = [];
class AboutUsApp extends Component {
    state = {
        showItems: 4,
        about: [
            {
                name: "About our work",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            },
            {
                name: "Some random stuff",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            },
            {
                name: "More things we do",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            },
            {
                name: "Random things",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            },
            {
                name: "About Mars",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            },
            {
                name: "Reghingf saff",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            },
            {
                name: "Services used",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            },
            {
                name: "Our prices list",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            },
            {
                name: "About clients",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            },
            {
                name: "Rating on the web",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            },
            {
                name: "Buy new things",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            },
            {
                name: "Trusted seller",
                info:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere cumque ea saepe placeat autem. Ea rerum, nesciunt, ut magni nobis unde in cumque nam maiores nihil aut minus repellat.",
                show: false
            }
        ]
    };

    toggleVisibility = e => {
        selected = [];
        selected = [...e.target.id];
        this.state.about.map((item, index) => {
            if (index === Number(selected.join(""))) {
                this.setState(prevState => ({
                    about: prevState.about.map((obj, index) =>
                        index === Number(selected.join(""))
                            ? Object.assign(obj, { show: !item.show })
                            : obj
                    )
                }));
            }
            return null;
        });
    };

    showMore = () => {
        if (this.state.showItems <= this.state.about.length) {
            this.setState({ showItems: this.state.showItems + 4 });
        }
    };

    showLess = () => {
        if (this.state.showItems >= 4) {
            this.setState({ showItems: 4 });
        }
    };

    createItems = () => {
        const { about, showItems } = this.state;
        const create = about
            .filter((item, index) => showItems >= index + 1)
            .map((item, index) => (
                <ItemContainer key={index}>
                    <ItemName>
                        {item.name}
                        <Button onClick={this.toggleVisibility} id={index}>
                            {item.show ? "-" : "+"}
                        </Button>
                    </ItemName>
                    <ItemInfo show={item.show}>{item.info}</ItemInfo>
                </ItemContainer>
            ));
        return create;
    };
    render() {
        const { showItems, about } = this.state;
        return (
            <React.Fragment>
                <Container>{this.createItems()}</Container>
                {showItems < about.length ? (
                    <ViewButton onClick={() => this.showMore()}>
                        View More
                    </ViewButton>
                ) : (
                    <ViewButton onClick={() => this.showLess()}>
                        View Less
                    </ViewButton>
                )}
            </React.Fragment>
        );
    }
}
export default AboutUsApp;