/**
    Copyright 2010 Steve Hanov

    This file is part of qb.js

    qb.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    qb.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with qb.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @constructor */
function TabView()
{
    this.div = document.createElement("div");

    this.tabDiv = document.createElement("div");
    this.contentDiv = document.createElement("div");
    this.contentDiv.style.border = "2px solid orange"

    this.div.appendChild( this.tabDiv );
    this.div.appendChild( this.contentDiv );

    this.tabs = [];
    this.selected = null;
}

TabView.prototype = {
    addTab: function( caption, content )
    {
        var tab = document.createElement("a");
        var index = this.tabs.length;
        var self = this;
        tab.href="javascript:void(0)";
        $(tab).click(function()
        {
            self.selectTab( index );
        });

/*
        $(tab).mouseenter(function()
        {
            if ( !this.selected ) {
                this.style.background = "white";
            }
        });

        $(tab).mouseleave(function()
        {
            if ( !this.selected ) {
                this.style.background = "orange";
            }
        });
*/
        tab.style.background = "orange";
        tab.style.color = "white";
        tab.style.padding = "3px";
        tab.style.marginRight = "3px";
        tab.style.border = "2px solid orange";
        tab.style.textDecoration = "none";
        tab.style.fontFamily = "Arial";
        tab.style.fontWeight = "bold";
        tab.appendChild( document.createTextNode( caption ) );
        tab.selected = false;

        this.tabDiv.appendChild( tab );
        $(content).hide();
        this.contentDiv.appendChild( content );

        this.tabs.push( { tab: tab, content: content } );

        if ( this.tabs.length === 1 ) {
            this.selectTab( 0 );
        }
    },

    selectTab: function( index )
    {
        if ( this.selected ) {
            this.setStyle( this.selected.tab, false );
            $(this.selected.content).hide();
            this.selected.tab.selected = false;
        }

        if ( index >= 0 ) {
            this.selected = this.tabs[index];
            this.setStyle( this.selected.tab, true );
            $(this.selected.content).show();
            this.selected.tab.selected = true;
        } else {
            this.selected = null;
        }
    },

    setStyle: function( e, selected )
    {
        if ( selected ) {
            e.style.background = "white";
            e.style.borderBottom = "2px solid white";
            e.style.color = "orange";
        } else {
            e.style.background = "orange";
            e.style.color = "white";
            e.style.borderBottom = "2px solid orange";
        }
    }
}
