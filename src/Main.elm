module Main exposing (..)

import Html exposing (..)
import Html.App as Html
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


main =
    Html.beginnerProgram
        { model = model
        , view = view
        , update = update
        }


type alias Model =
    { name : String }


model : Model
model =
    Model ""


type Msg
    = Name String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Name name ->
            { model | name = name }


view : Model -> Html Msg
view model =
    div [ class "container" ]
        [ div [ class "row" ]
            [ input [ class "col-md-4 col-md-offset-4", type' "text", placeholder "Name", onInput Name ] []
            , welcomeText model
            ]
        ]


welcomeText : Model -> Html msg
welcomeText model =
    h1 [ class "col-md-4 col-md-offset-4" ] [ text (welcomeJskc model.name) ]


welcomeJskc : String -> String
welcomeJskc name =
    "Welcome to JSKC, " ++ name
