import React from 'react'
import styles from './Sponsor.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const iconCommonUrl = '/img/icons/'

export default class Sponsor extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <>
                <div className={styles.companyUsage} ref={this.containerRef}>
                    <h2 className={styles.title}>{this.props.headerTitle}</h2>
                    <div className={styles.cardList}>
                        <a className={styles.cardItem} style={{backgroundColor: '#9ed3e5'}} href={'https://www.eoapi.io/zh/?utm_source=sponsor&utm_campaign=s-hertzbeat'}>
                            <img src={iconCommonUrl + 'eoapi_logo.jpg'} className={styles.zoom} alt={''}/>
                            <div className={styles.cardItemTextBody}>
                                <p className={styles.name}>Eoapi</p>
                                <p className={styles.desc}>开源API管理工具、接口文档、接口测试、Mock</p>
                            </div>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}
