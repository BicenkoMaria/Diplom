import styles from "@/styles/Cooperation.module.css";

/*
async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "88bae09d-3a4b-4c3d-be99-cd9cd2810e36");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
}
*/
function Cooperation () {
/*
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "88bae09d-3a4b-4c3d-be99-cd9cd2810e36");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.flex}>
            <input type="text" name="name"/>
            <input type="email" name="email"/>
            <textarea name="message"></textarea>
            <button type="submit">Submit Form</button>
      </form>
    </>

    <form onSubmit={handleSubmit}></form>
  );

    */
    return(
        <div className={styles.main}>
            <h1 className={styles.h1}>Сотрудничество</h1>
            <p>
                Наш магазин ценит своих покупателей, поэтому каждый из вас может сотрудничать сотрудничать с нами.<br/>
                Вы можете предложить идеи для коллекций, предложить новые варианты товаров, а также тематику серий. Будьте уверены,
                мы обязательно учтём каждое ваше предложение.<br/>
                Кроме того, если вы автор и желаете создать наборы сувениров по своим историям, то мы с удовольствием вам поможем.<br/>
                Также мы с удовольствием будем сотрудничать с художниками, желающими принимать участие в создании коллекций.<br/>
            </p>
            <p>
                Для сотрудничества заполняйте форму обратной связи. Мы с нетерпением ждём ваших предложений!
            </p>
            
                <div className={styles.flex}>
                    <span>Имя:</span>
                    <input type="text" name="name" className={styles.in}></input>
                    <span>Фамилия:</span>
                    <input type="text" name="surname" className={styles.in}></input>
                    <span>Email:</span>
                    <input type="email" name="email" className={styles.in}></input>
                    <span>Тип сотрудничества:</span>
                    <select className={styles.sel} name="cooperation">
                        <option className={styles.sel}>Предложить идею</option>
                        <option className={styles.sel}>Художник</option>
                        <option className={styles.sel}>Писатель</option>
                    </select>
                    <span>Опишите ваше предложение для сотрудничества</span>
                    <textarea name="message" className={styles.big}></textarea>
                    <input type="submit" value="Отправить предложение"></input>                
                </div>
            
        </div>
    );
    
}

export default Cooperation;