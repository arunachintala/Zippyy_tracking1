import React, { useState } from "react";

function RadioButton() {
    const [selectedValue, setSelectedValue] = useState("option1");

    const handleRadioChange = (value) => {
        setSelectedValue(value);
    };

    const styles = {
        container: {
            display: "flex",
            flex: 1,
            marginLeft: '10px',
        },
        radioGroup: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "20px",
            color: '#D54029',
            backgroundColor: "white",
            padding: "30px",
        },

        radioLabel: {
            marginLeft: "10px",
            fontSize: "17px",
            color: "#5F5A6B",
        },
        hiddenRadio: {
            position: 'absolute',
            opacity: 0,
            cursor: 'pointer',
        },
        customRadio: {
            position: 'relative',
            width: '20px',
            height: '20px',
            backgroundColor: '#fff',
            border: '2px solid #D54029',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'inline-block',
            marginRight: '8px',
            alignitems: 'center',
        },
        customRadioChecked: {
            backgroundColor: '#D54029',
            border: '1px solid #D54029 '
        },
    };

    return (
        <div style={{ border: '1px solid white' }}>
            <div style={styles.container}>
                <div style={styles.radioGroup}>
                    <div style={styles.radioButton}>
                        <input
                            type="radio"
                            id="option1"
                            value="option1"
                            checked={selectedValue === "option1"}
                            onChange={() => handleRadioChange("option1")}
                            style={styles.hiddenRadio}
                        />
                        <label htmlFor="option1" style={styles.radioLabel}>
                            <span style={{
                                ...styles.customRadio,
                                ...(selectedValue === "option1" ? styles.customRadioChecked : {}),
                            }}></span>
                            Preview tracking page
                        </label>
                    </div>

                    <div style={styles.radioButton}>
                        <input
                            type="radio"
                            id="option2"
                            value="option2"
                            checked={selectedValue === "option2"}
                            onChange={() => handleRadioChange("option2")}
                            style={styles.hiddenRadio}
                        />
                        <label htmlFor="option2" style={styles.radioLabel}>
                            <span style={{
                                ...styles.customRadio,
                                ...(selectedValue === "option2" ? styles.customRadioChecked : {}),
                            }}></span>
                            Preview tracking widget
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RadioButton;
