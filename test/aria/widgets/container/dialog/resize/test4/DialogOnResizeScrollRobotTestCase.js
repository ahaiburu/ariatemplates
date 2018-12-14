/*
 * Copyright 2013 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Aria.classDefinition({
    $classpath : "test.aria.widgets.container.dialog.resize.test4.DialogOnResizeScrollRobotTestCase",
    $extends : "test.aria.widgets.container.dialog.resize.AbstractResizableDialogRobotBase",
    $constructor : function () {
        this.$AbstractResizableDialogRobotBase.constructor.call(this);

        this.setTestEnv({
            css : "position:relative;top:400px;height:50000px;border:15px solid blue;"
        });
    },
    $prototype : {

        runTemplateTest : function () {
            Aria.$window.scrollBy(0,150);
            aria.core.Timer.addCallback({
                fn : this.startResizeTest,
                scope : this,
                delay : 1000
            });
        },

        startResizeTest : function () {
            var dom = aria.utils.Dom;
            this.assertEquals(dom.getDocumentScrollElement().scrollTop, 150, "The page should have %2 px of scroll, but it has %1 px instead");
            this.$AbstractResizableDialogRobotBase.startResizeTest.call(this);
        }
    }
});