package Dokumentoobor8.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dokumentoobor8.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ФормаДокумента
 */
@Entity(name = "IISDokumentoobor8ФормаДокумента")
@Table(schema = "public", name = "ФормаДокумента")
public class FormaDokumenta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Содержание")
    private String содержание;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Отделы")
    private String отделы;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "AvPolzovateli")
    @Convert("AvPolzovateli")
    @Column(name = "АвПользователи", length = 16, unique = true, nullable = false)
    private UUID _avpolzovateliid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "AvPolzovateli", insertable = false, updatable = false)
    private AvPolzovateli avpolzovateli;


    public FormaDokumenta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getСодержание() {
      return содержание;
    }

    public void setСодержание(String содержание) {
      this.содержание = содержание;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getОтделы() {
      return отделы;
    }

    public void setОтделы(String отделы) {
      this.отделы = отделы;
    }


}