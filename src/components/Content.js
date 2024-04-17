import { useTranslation  } from "react-i18next";

const Content = () => {
    const { t } = useTranslation ();
    return (
        <div className="content">
            <p>{t("React")}</p>
            <p>{t("React Native")}</p>
            <p>{t("Redux")}</p>
        </div>
    );
}

export default Content;