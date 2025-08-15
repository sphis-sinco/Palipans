export function performComicActions(panelNum = 2, pathPrefix = '', panelPrefix = 'panel_')
{
        var panels = document.createElement('div');

        var i = 0
        while (i < panelNum)
        {
                var newPanel = document.createElement('img');
                newPanel.src = pathPrefix + panelPrefix + ((i + 1).toString()) + '.png'
                panels.appendChild(newPanel);
                panels.appendChild(document.createElement('br'));

                i++;
        }

        return panels;
}