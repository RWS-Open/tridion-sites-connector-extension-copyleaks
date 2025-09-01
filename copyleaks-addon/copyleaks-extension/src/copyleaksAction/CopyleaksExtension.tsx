import { t } from "@globals";
import { type ExtensionBuilder,useContentExplorer } from '@tridion-sites/extensions';
import { Component } from "@tridion-sites/models";
import { ScanSearch } from "lucide-react";
import CopyleaksDashboard from "src/components/CopyleaksDashboard";

const panelExtensionId = 'copyleaks';

export const CopyleaksExtension = (builder: ExtensionBuilder) => {
    builder.translations.addTranslation("en", {
        "mypagelabel":"Copy Leaks"
    })
    builder.translations.addTranslation("fr", {
        "mypagelabel":"fr:Copy Leaks"
    })
    builder.contentExplorer.insightsPanels.register(() => {
       const { currentItem,  } = useContentExplorer();
       const isItemAllowed = currentItem instanceof Component;
        return{
            id:panelExtensionId,
            component:CopyleaksDashboard,
            usePanel:() =>{
                return{
                    title:t("Copyleaks Scan Properties"),
                    isAvailable: isItemAllowed,
                    icon:<ScanSearch size="18" color="#758099"/>
                }
            }
        }
    }) 
    builder.contentExplorer.insightsPanels.config.add(panelExtensionId)
}