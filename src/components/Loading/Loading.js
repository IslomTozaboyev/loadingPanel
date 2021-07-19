import "./Loading.css";
import React, { Component } from 'react'
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt, faReply } from "@fortawesome/free-solid-svg-icons";
import { faRenren } from "@fortawesome/free-brands-svg-icons";

export default class Loading extends Component {
    constructor(props) {
        super(props)

        this.state = {step: 0, color: "red", a: true}
    }

    Stop = () => {
        if (this.state.a) {
            clearInterval(this.timer);
        }
        else {
            this.timer = setInterval(() => {
                this.state.step < 100 && this.setState((state) => {
                    return { step: state.step + 1 }
                })
            }, 100);
        }
        this.setState((state) => {
            return { a: !state.a }
        })
    }

  

    componentDidUpdate() {

        if (this.state.step > 5 && this.state.step < 10 && this.state.color != "#800080") {
            this.setState((state) => {
                return { color: "#800080"}
            })
        }
        if (this.state.step > 10 && this.state.step < 15 && this.state.color != "#FF00FF") {
            this.setState((state) => {
                return { color: "#FF00FF"}
            })
        }
        if (this.state.step > 15 && this.state.step < 20 && this.state.color != "#000080") {
            this.setState((state) => {
                return { color: "#000080"}
            })
        }
        if (this.state.step > 20 && this.state.step < 25 && this.state.color != "#0000FF") {
            this.setState((state) => {
                return { color: "#0000FF"}
            })
        }
        if (this.state.step > 25 && this.state.step < 30 && this.state.color != "#00FFFF") {
            this.setState((state) => {
                return { color: "#00FFFF"}
            })
        }
        if (this.state.step > 30 && this.state.step < 35 && this.state.color != "#008000") {
            this.setState((state) => {
                return { color: "#008000"}
            })
        }
        if (this.state.step > 35 && this.state.step < 40 && this.state.color != "#00FF00") {
            this.setState((state) => {
                return { color: "#00FF00"}
            })
        }
        if (this.state.step > 40 && this.state.step < 45 && this.state.color != "#FFFF00") {
            this.setState((state) => {
                return { color: "#FFFF00"}
            })
        }
        if (this.state.step > 45 && this.state.step < 50 && this.state.color != "#800000") {
            this.setState((state) => {
                return { color: "#800000"}
            })
        }
        if (this.state.step > 50 && this.state.step < 55 && this.state.color != "#FF0000") {
            this.setState((state) => {
                return { color: "#FF0000"}
            })
        }
        if (this.state.step > 55 && this.state.step < 60 && this.state.color != "#808080") {
            this.setState((state) => {
                return { color: "#808080"}
            })
        }
        if (this.state.step > 60 && this.state.step < 65 && this.state.color != "#FA8072") {
            this.setState((state) => {
                return { color: "#FA8072"}
            })
        }
        if (this.state.step > 65 && this.state.step < 70 && this.state.color != "#C0C0C0") {
            this.setState((state) => {
                return { color: "#C0C0C0"}
            })
        }
        if (this.state.step > 70 && this.state.step < 75 && this.state.color != "#6495ED") {
            this.setState((state) => {
                return { color: "#6495ED"}
            })
        }
        if (this.state.step > 75 && this.state.step < 80 && this.state.color != "#9FE2BF") {
            this.setState((state) => {
                return { color: "#9FE2BF"}
            })
        }
        if (this.state.step > 80 && this.state.step < 85 && this.state.color != "#DE3163") {
            this.setState((state) => {
                return { color: "#DE3163"}
            })
        }  if (this.state.step > 85 && this.state.step < 90 && this.state.color != "#FF7F50") {
            this.setState((state) => {
                return { color: "#FF7F50"}
            })
        }
        if (this.state.step > 90 && this.state.step < 95 && this.state.color != "#FFBF00") {
            this.setState((state) => {
                return { color: "#FFBF00"}
            })
        }
        if (this.state.step > 95 && this.state.step < 100 && this.state.color != "#1ea735") {
            this.setState((state) => {
                return { color: "#1ea735"}
            })
        }
    }
    
       componentDidMount() {
            this.timer = setInterval(() => {
                this.state.step < 100 && this.setState((state) => {
                    return { step: state.step + 1 }
                })
            }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    reflesh = () => {
        this.setState((state) => {
            return  window.location.reload(false);
        })
    }

    render() {
        return (
            <div>
                <h1 className="text">{this.state.step}% </h1>
                <div className="loadingPanel">
                    <div className="loading" style={{background:this.state.color, width: `${this.state.step}%`}}>
                    </div> 
                </div> <br />
                <Button color="primary" className="mt-4 button" onClick={this.Stop}> {this.state.a && "stop" || "start"}</Button>
                <Button color="primary" className="mt-4 ms-3 button" onClick={this.reflesh}>
                    <FontAwesomeIcon icon={faRedoAlt}/>
                </Button>
           </div>
        )
    }
}
